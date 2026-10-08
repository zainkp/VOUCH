import uuid
import logging
from datetime import datetime, timezone
from typing import Optional, Dict, Any
from app.core.firebase import get_db
from app.core.security import hash_password, verify_password, generate_session_token
from app.services.data_service import create_worker_profile

logger = logging.getLogger("vouch.auth")

class AuthError(Exception):
    pass

class EmailAlreadyExistsError(AuthError):
    pass

class InvalidCredentialsError(AuthError):
    pass

# In-memory store for fallback/fast lookups and testing
_AUTH_STORE: Dict[str, Any] = {
    "users": {},     # user_id -> user dict
    "emails": {},    # clean_email -> user_id
    "sessions": {}   # token -> {"user_id": user_id, "created_at": ...}
}

def register_user(
    name: str,
    email: str,
    password: str,
    role: str = "worker"
) -> Dict[str, Any]:
    if not email or not isinstance(email, str) or not email.strip():
        raise InvalidCredentialsError("Email is required.")
    if not password or len(password) < 8:
        raise InvalidCredentialsError("Password must be at least 8 characters.")

    clean_email = email.strip().lower()
    clean_name = name.strip() or "User"
    norm_role = role.strip().lower() if role else "worker"
    if norm_role in ["employer", "contractor"]:
        norm_role = "contractor"
    else:
        norm_role = "worker"

    # Check for existing account
    existing = get_user_by_email(clean_email)
    if existing:
        raise EmailAlreadyExistsError(f"An account with email '{clean_email}' already exists.")

    user_id = f"user_{uuid.uuid4().hex[:8]}"
    pwd_hash = hash_password(password)
    now_iso = datetime.now(timezone.utc).isoformat()
    worker_id: Optional[str] = None

    # If registering as worker, create the linked Worker profile
    if norm_role == "worker":
        worker_record = create_worker_profile({
            "user_id": user_id,
            "name": clean_name,
            "email": clean_email,
            "trade": "Tradesperson",
            "experience_years": 0,
            "location": "India",
            "skills": []
        })
        worker_id = worker_record["id"]

    user_data = {
        "id": user_id,
        "name": clean_name,
        "email": clean_email,
        "password_hash": pwd_hash,
        "role": norm_role,
        "worker_id": worker_id,
        "is_active": True,
        "created_at": now_iso
    }

    # Store in memory
    _AUTH_STORE["users"][user_id] = user_data
    _AUTH_STORE["emails"][clean_email] = user_id

    # Store in Firestore
    db = get_db()
    if db:
        try:
            db.collection("users").document(user_id).set(user_data)
            logger.info(f"Registered user {user_id} ({clean_email}) in Firestore")
        except Exception as e:
            logger.warning(f"Error persisting user to Firestore: {e}")

    # Generate session token
    token = generate_session_token()
    session_data = {
        "token": token,
        "user_id": user_id,
        "created_at": now_iso
    }
    _AUTH_STORE["sessions"][token] = session_data

    if db:
        try:
            db.collection("sessions").document(token).set(session_data)
        except Exception as e:
            logger.warning(f"Error persisting session to Firestore: {e}")

    return {
        "token": token,
        "user_id": user_id,
        "name": clean_name,
        "email": clean_email,
        "role": norm_role,
        "worker_id": worker_id
    }

def login_user(email: str, password: str) -> Dict[str, Any]:
    if not email or not password:
        raise InvalidCredentialsError("Invalid email or password.")

    clean_email = email.strip().lower()
    user = get_user_by_email(clean_email)
    if not user:
        # Generic error message: do not expose whether email exists
        raise InvalidCredentialsError("Invalid email or password.")

    pwd_hash = user.get("password_hash")
    if not pwd_hash or not verify_password(password, pwd_hash):
        raise InvalidCredentialsError("Invalid email or password.")

    now_iso = datetime.now(timezone.utc).isoformat()
    token = generate_session_token()
    session_data = {
        "token": token,
        "user_id": user["id"],
        "created_at": now_iso
    }
    _AUTH_STORE["sessions"][token] = session_data

    db = get_db()
    if db:
        try:
            db.collection("sessions").document(token).set(session_data)
        except Exception as e:
            logger.warning(f"Error persisting session to Firestore: {e}")

    return {
        "token": token,
        "user_id": user["id"],
        "name": user["name"],
        "email": user["email"],
        "role": user.get("role", "worker"),
        "worker_id": user.get("worker_id")
    }

def get_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    if not email:
        return None
    clean_email = email.strip().lower()

    # 1. Check in-memory store
    user_id = _AUTH_STORE["emails"].get(clean_email)
    if user_id and user_id in _AUTH_STORE["users"]:
        return dict(_AUTH_STORE["users"][user_id])

    # 2. Check Firestore
    db = get_db()
    if db:
        try:
            from google.cloud.firestore_v1.base_query import FieldFilter
            docs = list(db.collection("users").where(filter=FieldFilter("email", "==", clean_email)).limit(1).stream())
            if docs:
                u_data = docs[0].to_dict()
                _AUTH_STORE["users"][u_data["id"]] = u_data
                _AUTH_STORE["emails"][clean_email] = u_data["id"]
                return dict(u_data)
        except Exception as e:
            logger.warning(f"Error querying user by email in Firestore: {e}")

    return None

def get_user_by_id(user_id: str) -> Optional[Dict[str, Any]]:
    if not user_id:
        return None
    if user_id in _AUTH_STORE["users"]:
        return dict(_AUTH_STORE["users"][user_id])

    db = get_db()
    if db:
        try:
            doc = db.collection("users").document(user_id).get()
            if doc.exists:
                u_data = doc.to_dict()
                _AUTH_STORE["users"][user_id] = u_data
                if u_data.get("email"):
                    _AUTH_STORE["emails"][u_data["email"].strip().lower()] = user_id
                return dict(u_data)
        except Exception as e:
            logger.warning(f"Error querying user by id in Firestore: {e}")

    return None

def get_user_by_token(token: str) -> Optional[Dict[str, Any]]:
    if not token or not isinstance(token, str):
        return None

    clean_token = token.strip()
    session = _AUTH_STORE["sessions"].get(clean_token)

    if not session:
        db = get_db()
        if db:
            try:
                doc = db.collection("sessions").document(clean_token).get()
                if doc.exists:
                    session = doc.to_dict()
                    _AUTH_STORE["sessions"][clean_token] = session
            except Exception as e:
                logger.warning(f"Error reading session from Firestore: {e}")

    if not session:
        return None

    user_id = session.get("user_id")
    if not user_id:
        return None

    return get_user_by_id(user_id)

def logout_token(token: str) -> bool:
    if not token:
        return False
    clean_token = token.strip()
    _AUTH_STORE["sessions"].pop(clean_token, None)

    db = get_db()
    if db:
        try:
            db.collection("sessions").document(clean_token).delete()
        except Exception as e:
            logger.warning(f"Error deleting session from Firestore: {e}")

    return True
