from uuid import UUID

from app.schemas.response import ErrorResponse, SuccessResponse
from app.schemas.task_approvement import (
    TaskApprovementCreate,
    TaskApprovementDepthRead,
    TaskApprovementRead,
    TaskApprovementUpdate,
)
from app.service.task_approvement import TaskApprovementService
from fastapi import APIRouter, HTTPException, Request

task_approvement_router = APIRouter(prefix="/task-approvement", tags=["TaskAppronemt"])
service = TaskApprovementService()


@task_approvement_router.get("/get_all")
async def get_all(
    request: Request,
    page: int = 1,
    quantity: int = 50,
    order_by: str | None = None,
    # search_field: Annotated[PerfumeSearch, Depends()] = None,
    # search_volume: Annotated[PerfumeVolumeSearch, Depends()] = None,
):
    data = await service.get_all(
        request=request,
        page=page,
        quantity=quantity,
        order_by=order_by,
        # search_fields=search_field.model_dump(exclude_none=True),
        # search_volume=search_volume.model_dump(exclude_none=True),
    )

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@task_approvement_router.get("/{id}", response_model=TaskApprovementDepthRead)
async def get_by_id(id: UUID) -> TaskApprovementDepthRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@task_approvement_router.post("/create", response_model=TaskApprovementRead, status_code=201)
async def create(data: TaskApprovementCreate) -> TaskApprovementRead:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@task_approvement_router.patch("/update/{id}", response_model=TaskApprovementDepthRead)
async def update(id: UUID, data: TaskApprovementUpdate) -> TaskApprovementDepthRead:
    data = await service.update(id=id, data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@task_approvement_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data