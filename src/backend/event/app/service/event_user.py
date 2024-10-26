from repository.event_user import EventUserRepository

from app.schemas.event_user import EventUserDepthRead, EventUserRead

from ._base_service import BaseService


class EventUserService(BaseService):
    _repository = EventUserRepository()
    _serializer = EventUserRead
    _depth_serializer = EventUserDepthRead