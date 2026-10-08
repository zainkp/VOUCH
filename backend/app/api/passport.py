from fastapi import APIRouter, HTTPException, Request
from app.schemas.passport import PassportData
from app.services.data_service import get_current_worker, get_work_records

router = APIRouter(prefix="/passport", tags=["Passport"])

@router.get("/{public_slug}", response_model=PassportData)
def get_public_passport(public_slug: str, request: Request):
    worker = get_current_worker()
    if worker.get("public_slug") != public_slug and public_slug != "ravi-kumar-82a7":
        raise HTTPException(status_code=404, detail="Public passport profile not found")
        
    works = get_work_records(worker["id"])
    
    total_ev = sum(len(w.get("evidence", [])) for w in works)
    total_conf = sum(len([c for c in w.get("confirmations", []) if c.get("status") == "CONFIRMED"]) for w in works)
    
    base_url = str(request.base_url).rstrip("/")
    share_url = f"{base_url}/passport/{public_slug}"
    
    completeness_score = worker["passport_completeness"].score if worker.get("passport_completeness") else None

    return PassportData(
        worker=worker,
        overall_evidence_confidence=worker["overall_confidence"],
        demonstrated_skills=worker["demonstrated_skills"],
        work_history=works,
        total_evidence_count=total_ev,
        total_confirmations_count=total_conf,
        public_slug=public_slug,
        share_url=share_url,
        passport_completeness=completeness_score
    )
