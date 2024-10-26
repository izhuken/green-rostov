from repository.point import PointRepository

from app.schemas.point import PointDepthRead, PointRead

from ._base_service import BaseService


class PointService(BaseService):
    _repository = PointRepository()
    _serializer = PointRead
    _depth_serializer = PointDepthRead