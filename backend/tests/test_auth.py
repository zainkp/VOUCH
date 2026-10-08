import uuid
import pytest
from starlette.testclient import TestClient
from app.main import app

@pytest.fixture
def client():
    return TestClient(app)

def test_auth_registration_and_login_flow(client):
    uid = uuid.uuid4().hex[:6]
    unique_email = f"vikram.{uid}@example.com"
    password = "SecurePassword123!"

    # 1. Register new worker
    reg_res = client.post("/api/auth/register", json={
        "name": "Vikram Sharma",
        "email": unique_email,
        "password": password,
        "role": "worker"
    })
    assert reg_res.status_code == 201
    reg_data = reg_res.json()
    assert "token" in reg_data
    assert reg_data["email"] == unique_email
    assert reg_data["role"] == "worker"
    assert reg_data["worker_id"] is not None
    vikram_token = reg_data["token"]
    vikram_worker_id = reg_data["worker_id"]

    # 2. Duplicate registration rejected
    dup_res = client.post("/api/auth/register", json={
        "name": "Vikram Clone",
        "email": unique_email,
        "password": password,
        "role": "worker"
    })
    assert dup_res.status_code == 409

    # 3. Short password rejected
    short_pwd_res = client.post("/api/auth/register", json={
        "name": "Short Pwd",
        "email": "short@example.com",
        "password": "short",
        "role": "worker"
    })
    assert short_pwd_res.status_code == 422

    # 4. Login with correct credentials
    login_res = client.post("/api/auth/login", json={
        "email": unique_email.upper(),  # test case insensitivity
        "password": password
    })
    assert login_res.status_code == 200
    login_data = login_res.json()
    assert "token" in login_data
    assert login_data["worker_id"] == vikram_worker_id

    # 5. Login with wrong password returns 401
    bad_pwd_res = client.post("/api/auth/login", json={
        "email": unique_email,
        "password": "WrongPassword999!"
    })
    assert bad_pwd_res.status_code == 401
    assert "Invalid email or password" in bad_pwd_res.json()["detail"]

    # 6. Login with nonexistent email returns 401
    no_user_res = client.post("/api/auth/login", json={
        "email": "nonexistent_person_xyz@example.com",
        "password": password
    })
    assert no_user_res.status_code == 401
    assert "Invalid email or password" in no_user_res.json()["detail"]

    # 7. Access /api/auth/me with Bearer token
    me_res = client.get("/api/auth/me", headers={"Authorization": f"Bearer {vikram_token}"})
    assert me_res.status_code == 200
    me_data = me_res.json()
    assert me_data["email"] == unique_email
    assert me_data["name"] == "Vikram Sharma"
    assert me_data["worker_id"] == vikram_worker_id

    # 8. Access /api/workers/me with Vikram's token -> resolves Vikram's profile, NOT Ravi Kumar
    worker_me_res = client.get("/api/workers/me", headers={"Authorization": f"Bearer {vikram_token}"})
    assert worker_me_res.status_code == 200
    worker_me_data = worker_me_res.json()
    assert worker_me_data["id"] == vikram_worker_id
    assert worker_me_data["name"] == "Vikram Sharma"
    assert worker_me_data["email"] == unique_email

    # 9. Register second user (Deepak) -> User Isolation Verification
    deepak_email = f"deepak.{uid}@example.com"
    deepak_reg = client.post("/api/auth/register", json={
        "name": "Deepak Patel",
        "email": deepak_email,
        "password": "ContractorPass2026!",
        "role": "contractor"
    })
    assert deepak_reg.status_code == 201
    deepak_data = deepak_reg.json()
    deepak_token = deepak_data["token"]
    assert deepak_data["role"] == "contractor"

    # Deepak's /api/auth/me returns Deepak
    deepak_me = client.get("/api/auth/me", headers={"Authorization": f"Bearer {deepak_token}"})
    assert deepak_me.status_code == 200
    assert deepak_me.json()["name"] == "Deepak Patel"
    assert deepak_me.json()["email"] == deepak_email

    # Vikram's token still returns Vikram (No cross-contamination)
    vikram_recheck = client.get("/api/auth/me", headers={"Authorization": f"Bearer {vikram_token}"})
    assert vikram_recheck.status_code == 200
    assert vikram_recheck.json()["email"] == unique_email

    # 10. Logout invalidates session
    logout_res = client.post("/api/auth/logout", headers={"Authorization": f"Bearer {vikram_token}"})
    assert logout_res.status_code == 200

    # Subsequent /api/auth/me fails with 401
    revoked_me = client.get("/api/auth/me", headers={"Authorization": f"Bearer {vikram_token}"})
    assert revoked_me.status_code == 401
