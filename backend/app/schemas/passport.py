from typing import List, Optional
from pydantic import BaseModel
from app.schemas.worker import WorkerProfile, SkillConfidence
from app.schemas.work import WorkRecord

class PassportData(BaseModel):
    worker: WorkerProfile
    overall_evidence_confidence: int
    demonstrated_skills: List[SkillConfidence]
    work_history: List[WorkRecord]
    total_evidence_count: int
    total_confirmations_count: int
    public_slug: str
    share_url: str
