from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema
from .file import FileRead


class TaskApprovementBase(BaseSchema):
    description: str
    user_id: UUID
    task_id: UUID
    approved: bool = Field(default=False)

class TaskApprovementRead(TaskApprovementBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class TaskApprovementDepthRead(TaskApprovementRead):
    file: list[FileRead]


class TaskApprovementCreate(TaskApprovementBase):
    pass

class TaskApprovementUpdate(BaseModel):
    approved: bool = Field(default=False)

# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)