from repository.user_point_request import UserPointRequestRepository

from app.schemas.user_point_request import UserPointRequestRead

from ._base_service import BaseService


class UserPointRequestService(BaseService):
    _repository = UserPointRequestRepository()
    _serializer = UserPointRequestRead
