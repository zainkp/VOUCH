from fastapi import APIRouter, HTTPException
from app.schemas.worker import WorkerProfile
from app.services.data_service import get_current_worker

router = APIRouter(prefix="/workers", tags=["Workers"])

@router.get("/me", response_model=WorkerProfile)
def get_my_profile():
    profile = get_current_worker()
    if not profile:
        raise HTTPException(status_code=404, detail="Worker profile not found")
    return profile

@router.get("/{worker_id}", response_model=WorkerProfile)
def get_worker_profile(worker_id: str):
    profile = get_current_worker()
    if not profile:
        raise HTTPException(status_code=404, detail="Worker not found")
    return profile
