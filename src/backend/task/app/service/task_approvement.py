import json
from uuid import UUID

from repository.task_approvement import TaskApprovementRepository

from app.schemas._base import BaseSchema
from app.schemas.response import ErrorResponse
from app.schemas.task_approvement import TaskApprovementDepthRead, TaskApprovementRead

from ._base_service import BaseService
from .producer import KafkaService


class TaskApprovementService(BaseService):
    _repository = TaskApprovementRepository()
    _serializer = TaskApprovementRead
    _depth_serializer = TaskApprovementDepthRead
    _kafka_service = KafkaService()

    async def update(
        self, id: str | UUID, data: BaseSchema
    ) -> BaseSchema | ErrorResponse:
        result = await self._repository.update(id=id, data=data)
        if hasattr(result, "detail"):
            return ErrorResponse(detail=result.detail, status_code=result.status_code)
        self._kafka_service.produce(key="event", value=json.dumps({"data": {"event": result.data["count"][0]}, "user_id": str(result.data["data"].user_id)}))
        # self._kafka_service.produce(key="task", value=json.dumps({"data": {"task": result.data["count"][0]}, "user_id": "683a59c3-8b45-4d73-8324-fa4e59bc8386"}))
        return self._depth_serializer.model_validate(result.data["data"])