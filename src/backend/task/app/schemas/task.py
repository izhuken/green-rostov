from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema
from .file import FileRead


class TaskBase(BaseSchema):
    title: str
    description: str
    rating: int

class TaskRead(TaskBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class TaskDepthRead(TaskRead):
    logo: FileRead | None

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    title: str | None = Field(default=None)
    description: str | None = Field(default=None)
    rating: int | None = Field(default=None)
    logo: FileRead | None = Field(default=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)