from core.models.fraction import Fraction

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class FractionRepository(BaseSQLAlchemyRepository):
    model = Fraction
    additional_tables = ["logo"]