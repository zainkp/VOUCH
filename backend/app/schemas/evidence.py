from typing import Optional
from enum import Enum
from datetime import datetime
from pydantic import BaseModel

class EvidenceType(str, Enum):
    PHOTO = "PHOTO"
    DOCUMENT = "DOCUMENT"
    CERTIFICATE = "CERTIFICATE"
    WORK_ORDER = "WORK_ORDER"
    DECLARATION = "DECLARATION"

class EvidenceCreate(BaseModel):
    work_record_id: str
    type: EvidenceType
    url: str
    description: Optional[str] = ""

class Evidence(EvidenceCreate):
    id: str
    created_at: str
