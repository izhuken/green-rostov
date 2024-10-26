from repository.point_fraction import PointFractionRepository

from app.schemas.point_fraction import PointFractionRead

from ._base_service import BaseService


class PointFractionService(BaseService):
    _repository = PointFractionRepository()
    _serializer = PointFractionRead