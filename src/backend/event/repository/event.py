from core.models.event import Event

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class EventRepository(BaseSQLAlchemyRepository):
    model = Event
    additional_tables = ["file"]