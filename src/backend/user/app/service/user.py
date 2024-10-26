from repository.user import UserRepository

from app.schemas.user import UserDepthRead, UserRead

from ._base_service import BaseService


class UserService(BaseService):
    _repository = UserRepository()
    _serializer = UserRead
    _depth_serializer = UserDepthRead