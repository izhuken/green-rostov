from uuid import UUID

from app.schemas.response import ErrorResponse, SuccessResponse
from app.schemas.user_product import (
    UserProductInsert,
    UserProductRead,
    UserProductResult,
)
from app.service.user_product import UserProductService
from fastapi import APIRouter, HTTPException, Request

user_product_router = APIRouter(prefix="/user-product", tags=["UserProduct"])
service = UserProductService()


@user_product_router.get("/get_all")
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


@user_product_router.get("/{id}", response_model=UserProductRead)
async def get_by_id(id: UUID) -> UserProductRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@user_product_router.post("/create", response_model=UserProductResult, status_code=201)
async def create(data: UserProductInsert) -> UserProductResult:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


# @user_product_router.patch("/update/{id}", response_model=UserProductRead)
# async def update(id: UUID, data: UserProductUpdate) -> UserProductRead:
#     data = await service.update(id=id, data=data)

#     if isinstance(data, ErrorResponse):
#         raise HTTPException(status_code=data.status_code, detail=data.detail)

#     return data


@user_product_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data