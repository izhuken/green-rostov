from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema
from .file import FileRead
from .fraction import FractionRead


class PointBase(BaseSchema):
    title: str
    longitude: str
    latitude: str
    address: str
    is_hidden: bool = Field(default=False)

class PointRead(PointBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class PointDepthRead(PointRead):
    file: FileRead | None
    fraction: list[FractionRead] | None

class PointCreate(PointBase):
    pass

class PointUpdate(BaseModel):
    title: str | None = Field(default=None)
    longitude: str | None = Field(default=None)
    latitude: str | None = Field(default=None)
    address: str | None = Field(default=None)
    is_hidden: bool = Field(default=False)
    logo: FileRead | None = Field(default=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)