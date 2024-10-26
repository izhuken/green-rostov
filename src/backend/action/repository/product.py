from core.models.product import Product

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class ProductRepository(BaseSQLAlchemyRepository):
    model = Product