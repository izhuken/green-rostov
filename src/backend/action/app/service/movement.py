from repository.movement import MovementRepository

from app.schemas.movement import MovementRead

from ._base_service import BaseService


class MovementService(BaseService):
    _repository = MovementRepository()
    _serializer = MovementRead