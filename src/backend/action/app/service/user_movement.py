from repository.user_movements import UserMovementRepository

from app.schemas.user_movement import UserMovementDepthRead, UserMovementRead

from ._base_service import BaseService


class UserMovementService(BaseService):
    _repository = UserMovementRepository()
    _serializer = UserMovementRead
    _depth_serializer = UserMovementDepthRead