from repository.fraction import FractionRepository

from app.schemas.fraction import FractionDepthRead, FractionRead

from ._base_service import BaseService


class FractionService(BaseService):
    _repository = FractionRepository()
    _serializer = FractionRead
    _depth_serializer = FractionDepthRead