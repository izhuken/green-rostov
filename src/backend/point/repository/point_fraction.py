from core.models.point_fraction import PointFraction

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class PointFractionRepository(BaseSQLAlchemyRepository):
    model = PointFraction