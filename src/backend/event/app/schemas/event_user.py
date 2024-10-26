from datetime import datetime
from uuid import UUID

from pydantic import Field

from ._base import BaseSchema
from .file import FileRead


class EventUserBase(BaseSchema):
    title: str
    description: str
    user_id: UUID
    event_id: UUID
    approved: bool = Field(default=False)

class EventUserRead(EventUserBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class EventUserCreate(EventUserBase):
    pass

class EventUserDepthRead(EventUserRead):
    file: list[FileRead] | None


# class EventUserUpdate(BaseModel):
#     title: str | None = Field(default=None)
#     description: str | None = Field(default=None)
#     rating: int | None = Field(default=None)
#     creator_id: bool = Field(default=False)
#     logo: FileRead | None = Field(default=None)

# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)