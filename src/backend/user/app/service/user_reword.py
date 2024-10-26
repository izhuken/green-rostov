from repository.user_reword import UserRewordRepository

from app.schemas.user_reword import UserRewordDepthRead, UserRewordRead

from ._base_service import BaseService


class UserRewordService(BaseService):
    _repository = UserRewordRepository()
    _serializer = UserRewordRead
    _depth_serializer = UserRewordDepthRead