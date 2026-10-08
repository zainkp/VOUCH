from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query, Header
from app.schemas.work import WorkRecord, WorkRecordCreate
from app.services.data_service import (
    get_work_records,
    get_work_record_by_id,
    create_work_record,
    get_active_worker_id
)

router = APIRouter(prefix="/work", tags=["Work"])

@router.get("", response_model=List[WorkRecord])
def list_work_records(
    worker_id: Optional[str] = Query(None),
    x_worker_id: Optional[str] = Header(None)
):
    target = worker_id or x_worker_id or get_active_worker_id()
    return get_work_records(target)

@router.post("", response_model=WorkRecord)
def add_work_record(
    payload: WorkRecordCreate,
    worker_id: Optional[str] = Query(None),
    x_worker_id: Optional[str] = Header(None)
):
    target = worker_id or x_worker_id or get_active_worker_id()
    created = create_work_record(target, payload.dict())
    return created

@router.get("/{work_id}", response_model=WorkRecord)
def get_work_record(work_id: str):
    record = get_work_record_by_id(work_id)
    if not record:
        raise HTTPException(status_code=404, detail="Work record not found")
    return record
