from uuid import UUID

from app.schemas.point_fraction import (
    PointFractionCreate,
    PointFractionRead,
)
from app.schemas.response import ErrorResponse, SuccessResponse
from app.service.point_fraction import PointFractionService
from fastapi import APIRouter, HTTPException, Request

point_fraction_router = APIRouter(prefix="/point-fraction", tags=["PointFraction"])
service = PointFractionService()


@point_fraction_router.get("/get_all")
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


@point_fraction_router.get("/{id}", response_model=PointFractionRead)
async def get_by_id(id: UUID) -> PointFractionRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@point_fraction_router.post("/create", response_model=PointFractionRead, status_code=201)
async def create(data: PointFractionCreate) -> PointFractionRead:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


# @user_point_request_router.patch("/update/{id}", response_model=PointFractionRead)
# async def update(id: UUID, data: UserPointRequestUpdate) -> PointFractionRead:
#     data = await service.update(id=id, data=data)

#     if isinstance(data, ErrorResponse):
#         raise HTTPException(status_code=data.status_code, detail=data.detail)

#     return data


@point_fraction_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data