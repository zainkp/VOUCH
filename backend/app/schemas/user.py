from datetime import datetime, timezone
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field

class UserRole(str, Enum):
    WORKER = "WORKER"
    CONTRACTOR = "CONTRACTOR"
    VERIFIER = "VERIFIER"
    ADMIN = "ADMIN"

class UserBase(BaseModel):
    name: str
    role: UserRole
    email: Optional[str] = None
    phone: Optional[str] = None

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: str
    is_active: bool = True
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: Optional[str] = None
