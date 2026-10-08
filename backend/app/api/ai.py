from fastapi import APIRouter
from app.schemas.ai import WorkExtractionRequest, WorkExtractionResponse
from app.services.ai_service import extract_work_from_text

router = APIRouter(prefix="/ai", tags=["AI"])

@router.post("/extract-work", response_model=WorkExtractionResponse)
def extract_work_details(payload: WorkExtractionRequest):
    return extract_work_from_text(payload.text)
