from core.models.user_point_request import UserPointRequest

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class UserPointRequestRepository(BaseSQLAlchemyRepository):
    model = UserPointRequest