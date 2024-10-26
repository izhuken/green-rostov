
from core.models.user_reword import UserReword

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class UserRewordRepository(BaseSQLAlchemyRepository):
    model = UserReword