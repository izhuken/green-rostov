from core.models.user_movement import UserMovement

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class UserMovementRepository(BaseSQLAlchemyRepository):
    model = UserMovement
    additional_tables = ["movement"]