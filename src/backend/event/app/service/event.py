from repository.event import EventRepository

from app.schemas.event import EventDepthRead, EventRead

from ._base_service import BaseService


class EventService(BaseService):
    _repository = EventRepository()
    _serializer = EventRead
    _depth_serializer = EventDepthRead