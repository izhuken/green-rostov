from uuid import UUID

from app.schemas.product import ProductCreate, ProductRead, ProductUpdate
from app.schemas.response import ErrorResponse, SuccessResponse
from app.service.product import ProductService
from fastapi import APIRouter, HTTPException, Request

product_router = APIRouter(prefix="/product", tags=["Product"])
service = ProductService()


@product_router.get("/get_all")
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


@product_router.get("/{id}", response_model=ProductRead)
async def get_by_id(id: UUID) -> ProductRead:
    data = await service.get_by_id(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@product_router.post("/create", response_model=ProductRead, status_code=201)
async def create(data: ProductCreate) -> ProductRead:
    data = await service.create(data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@product_router.patch("/update/{id}", response_model=ProductRead)
async def update(id: UUID, data: ProductUpdate) -> ProductRead:
    data = await service.update(id=id, data=data)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data


@product_router.delete("/delete/{id}", response_model=SuccessResponse)
async def delete(id: UUID) -> SuccessResponse:
    data = await service.delete(id=id)

    if isinstance(data, ErrorResponse):
        raise HTTPException(status_code=data.status_code, detail=data.detail)

    return data