from repository.user_product import UserProductRepository

from app.schemas.user_product import UserProductDepthRead, UserProductRead

from ._base_service import BaseService


class UserProductService(BaseService):
    _repository = UserProductRepository()
    _serializer = UserProductRead
    _depth_serializer = UserProductDepthRead