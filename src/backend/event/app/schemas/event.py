from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema
from .file import FileRead


class EventBase(BaseSchema):
    title: str
    description: str
    rating: int
    creator_id: UUID


class EventRead(EventBase):
    id: UUID
    create_time: datetime
    update_time: datetime
    
class EventCreate(EventBase):
    pass

class EventDepthRead(EventRead):
    file: list[FileRead] | None


class EventUpdate(BaseModel):
    title: str | None = Field(default=None)
    description: str | None = Field(default=None)
    rating: int | None = Field(default=None)
    creator_id: bool = Field(default=False)
    logo: FileRead | None = Field(default=None)

# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)