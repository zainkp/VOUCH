from typing import List
from fastapi import APIRouter, HTTPException
from app.schemas.work import WorkRecord, WorkRecordCreate
from app.services.data_service import get_work_records, get_work_record_by_id, create_work_record

router = APIRouter(prefix="/work", tags=["Work"])

@router.get("", response_model=List[WorkRecord])
def list_work_records():
    return get_work_records("ravi_kumar_001")

@router.post("", response_model=WorkRecord)
def add_work_record(payload: WorkRecordCreate):
    created = create_work_record("ravi_kumar_001", payload.dict())
    return created

@router.get("/{work_id}", response_model=WorkRecord)
def get_work_record(work_id: str):
    record = get_work_record_by_id(work_id)
    if not record:
        raise HTTPException(status_code=404, detail="Work record not found")
    return record
