from typing import Optional
from enum import Enum
from pydantic import BaseModel

class VerifierType(str, Enum):
    CUSTOMER = "CUSTOMER"
    SUPERVISOR = "SUPERVISOR"
    EMPLOYER = "EMPLOYER"

class ConfirmationStatus(str, Enum):
    PENDING = "PENDING"
    CONFIRMED = "CONFIRMED"
    REJECTED = "REJECTED"
    NOT_SURE = "NOT_SURE"

class ConfirmationRequest(BaseModel):
    work_record_id: str
    verifier_name: str
    verifier_type: VerifierType = VerifierType.CUSTOMER

class ConfirmationDecision(BaseModel):
    decision: ConfirmationStatus

class Confirmation(BaseModel):
    id: str
    work_record_id: str
    verifier_name: str
    verifier_type: VerifierType
    status: ConfirmationStatus
    token: str
    created_at: str
    verified_at: Optional[str] = None
