from uuid import UUID

from app.schemas.movement import MovementCreate, MovementRead, MovementUpdate
from app.schemas.response import ErrorResponse, SuccessResponse
from app.service.movement import MovementService
from fastapi import APIRouter, HTTPException, Request

movement_router = APIRouter(prefix="/movement", tags=["Movement"])
service = MovementService()


@movement_router.get("/get_all")
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


@movement_router.get("/{id}", response_model=MovementRead)
async def get_by_id(id: UUID) -> MovementRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@movement_router.post("/create", response_model=MovementRead, status_code=201)
async def create(data: MovementCreate) -> MovementRead:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@movement_router.patch("/update/{id}", response_model=MovementRead)
async def update(id: UUID, data: MovementUpdate) -> MovementRead:
    data = await service.update(id=id, data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@movement_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data