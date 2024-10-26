from repository.product import ProductRepository

from app.schemas.product import ProductRead

from ._base_service import BaseService


class ProductService(BaseService):
    _repository = ProductRepository()
    _serializer = ProductRead