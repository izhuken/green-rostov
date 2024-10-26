from core.models.event_user import EventUser

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class EventUserRepository(BaseSQLAlchemyRepository):
    model = EventUser
    additional_tables = ["file"]