from repository.task_approvement import TaskApprovementRepository

from app.schemas.task_approvement import TaskApprovementDepthRead, TaskApprovementRead

from ._base_service import BaseService


class TaskApprovementService(BaseService):
    _repository = TaskApprovementRepository()
    _serializer = TaskApprovementRead
    _depth_serializer = TaskApprovementDepthRead