from core.models.movement import Movement

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class MovementRepository(BaseSQLAlchemyRepository):
    model = Movement