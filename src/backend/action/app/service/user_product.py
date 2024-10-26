
import requests
from repository.product import ProductRepository
from repository.user_product import UserProductRepository

from app.schemas.product import ProductRead
from app.schemas.response import ErrorResponse, SuccessResponse
from app.schemas.user_product import (
    UserProductCreate,
    UserProductDepthRead,
    UserProductInsert,
    UserProductRead,
    UserProductResult,
)

from ._base_service import BaseService


class UserProductService(BaseService):
    _repository = UserProductRepository()
    _extension_repository = ProductRepository()
    _serializer = UserProductRead
    _result_serializer = UserProductResult
    _extension_serializer = ProductRead
    _depth_serializer = UserProductDepthRead

    async def create(self, data: UserProductInsert, **kwargs) -> SuccessResponse | ErrorResponse:
        result = {"user_product": [], "product": []}
        integreted = requests.post("https://proverkacheka.com/api/v1/check/get", json={
            "token": "29694.21OovkfN3Kpaufs3a",
            "qrraw": data.qrraw
            })
        
        for elem in integreted.json()["data"]["json"]["items"]:
            insert_products = await self._extension_repository.search_product(search_field=elem["name"])

            if hasattr(insert_products, "detail"):
                return ErrorResponse(detail=insert_products.detail, status_code=insert_products.status_code)

            for insert_product in insert_products.data:
                insert_data = {"user_id": str(data.user_id), "product_id": str(insert_product.id), "quantity": elem["quantity"]}
                insert_user_product = await self._repository.create(data=UserProductCreate(**insert_data))
            
                if hasattr(insert_user_product, "detail"):
                    return ErrorResponse(detail=insert_user_product.detail, status_code=insert_user_product.status_code)
                
                result["product"].append(self._extension_serializer.model_validate(insert_product))
                result["user_product"].append(self._serializer.model_validate(insert_user_product.data))

        return self._result_serializer(product=result["product"], user_product=result["user_product"])