from uuid import UUID

from app.schemas.response import ErrorResponse, SuccessResponse
from app.schemas.user_movement import (
    UserMovementCreate,
    UserMovementRead,
)
from app.service.user_movement import UserMovementService
from fastapi import APIRouter, HTTPException, Request

user_movement_router = APIRouter(prefix="/user-movement", tags=["UserMovement"])
service = UserMovementService()


@user_movement_router.get("/get_all")
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


@user_movement_router.get("/{id}", response_model=UserMovementRead)
async def get_by_id(id: UUID) -> UserMovementRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@user_movement_router.post("/create", response_model=UserMovementRead, status_code=201)
async def create(data: UserMovementCreate) -> UserMovementRead:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


# @user_movement_router.patch("/update/{id}", response_model=UserMovementRead)
# async def update(id: UUID, data: UserMovementUpdate) -> UserMovementRead:
#     data = await service.update(id=id, data=data)

#     if isinstance(data, ErrorResponse):
#         raise HTTPException(status_code=data.status_code, detail=data.detail)

#     return data


@user_movement_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data