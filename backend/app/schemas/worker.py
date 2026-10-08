from typing import Optional, List
from pydantic import BaseModel, Field

class SkillConfidence(BaseModel):
    skill_name: str
    confidence: int  # 0 to 100 percentage
    work_count: int
    confirmation_count: int
    photo_count: int
    document_count: int
    explanation: Optional[str] = None

class WorkerBase(BaseModel):
    name: str
    trade: str
    experience_years: int
    location: str
    bio: Optional[str] = None
    profile_photo_url: Optional[str] = None

class WorkerProfile(WorkerBase):
    id: str
    work_count: int = 0
    confirmation_count: int = 0
    overall_confidence: int = 0
    demonstrated_skills: List[SkillConfidence] = []
