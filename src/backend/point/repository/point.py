from core.models.point import Point

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class PointRepository(BaseSQLAlchemyRepository):
    model = Point
    additional_tables = ["file", "fraction"]