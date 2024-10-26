from core.models.task_approvement import TaskApprovement

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class TaskApprovementRepository(BaseSQLAlchemyRepository):
    model = TaskApprovement
    additional_tables = ["file"]