from core.models.task import Task

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class TaskRepository(BaseSQLAlchemyRepository):
    model = Task
    additional_tables = ["logo"]