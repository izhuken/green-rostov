from repository.reword import RewordRepository

from app.schemas.reword import RewordDepthRead, RewordRead

from ._base_service import BaseService


class RewordService(BaseService):
    _repository = RewordRepository()
    _serializer = RewordRead
    _depth_serializer = RewordDepthRead