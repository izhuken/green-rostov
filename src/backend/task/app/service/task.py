from repository.task import TaskRepository

from app.schemas.task import TaskDepthRead, TaskRead

from ._base_service import BaseService


class TaskService(BaseService):
    _repository = TaskRepository()
    _serializer = TaskRead
    _depth_serializer = TaskDepthRead