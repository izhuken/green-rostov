from datetime import datetime
from uuid import UUID

from ._base import BaseSchema
from .file import FileRead


class TaskApprovementBase(BaseSchema):
    description: str
    user_id: UUID
    task_id: UUID

class TaskApprovementRead(TaskApprovementBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class TaskApprovementDepthRead(TaskApprovementRead):
    file: list[FileRead]


class TaskApprovementCreate(TaskApprovementBase):
    pass

# class TaskApprovementUpdate(BaseModel):
#     title: str | None = Field(default=None)
#     user_id: str | None = Field(default=None)
#     ratintask_idg: int | None = Field(default=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)