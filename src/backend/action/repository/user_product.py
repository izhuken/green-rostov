from core.models.user_product import UserProduct

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class UserProductRepository(BaseSQLAlchemyRepository):
    model = UserProduct
    additional_tables = ["product"]