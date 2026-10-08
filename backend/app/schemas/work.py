from typing import Optional, List
from enum import Enum
from pydantic import BaseModel
from app.schemas.evidence import Evidence
from app.schemas.confirmation import Confirmation

class WorkStatus(str, Enum):
    DRAFT = "DRAFT"
    PENDING = "PENDING"
    CONFIRMED = "CONFIRMED"
    REJECTED = "REJECTED"

class WorkRecordCreate(BaseModel):
    title: str
    description: str
    date: str
    location: Optional[str] = None
    quantity: Optional[float] = None
    quantity_unit: Optional[str] = None
    trade: Optional[str] = None
    skills: List[str] = []

class WorkRecord(WorkRecordCreate):
    id: str
    worker_id: str
    status: WorkStatus = WorkStatus.PENDING
    evidence: List[Evidence] = []
    confirmations: List[Confirmation] = []
    confidence: int = 0
    created_at: str
