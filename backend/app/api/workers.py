from typing import Optional
from fastapi import APIRouter, HTTPException, Header, Query
from app.schemas.worker import WorkerProfile, WorkerOnboardingRequest
from app.services.data_service import get_current_worker, create_worker_profile

router = APIRouter(prefix="/workers", tags=["Workers"])

@router.post("", response_model=WorkerProfile, status_code=201)
def create_worker(payload: WorkerOnboardingRequest):
    data = payload.model_dump()
    created = create_worker_profile(data)
    return created

@router.get("/me", response_model=WorkerProfile)
def get_my_profile(
    worker_id: Optional[str] = Query(None),
    x_worker_id: Optional[str] = Header(None)
):
    target = worker_id or x_worker_id
    profile = get_current_worker(target)
    if not profile:
        raise HTTPException(status_code=404, detail="Worker profile not found")
    return profile

@router.get("/{worker_id}", response_model=WorkerProfile)
def get_worker_profile(worker_id: str):
    profile = get_current_worker(worker_id)
    if not profile:
        raise HTTPException(status_code=404, detail="Worker not found")
    return profile
