from core.models.reword import Reword

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class RewordRepository(BaseSQLAlchemyRepository):
    model = Reword
    additional_tables = ["logo", "user"]