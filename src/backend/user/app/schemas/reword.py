from datetime import datetime
from typing import Any
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field

from ._base import BaseSchema
from .file import FileRead
from .user import UserRead


class RewordBase(BaseSchema):
    title: str
    description: str
    rating: int
    condition: dict[str, Any]


class RewordRead(RewordBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class RewordDepthRead(RewordRead):
    logo: FileRead | None
    user: list[UserRead]| None

class RewordCreate(RewordBase):
    pass

class RewordUpdate(BaseModel):
    title: str| None = Field(default=None)
    description: EmailStr| None = Field(default=None)
    rating: int| None = Field(default=None)
    condition: dict[str, Any] = Field(defautl=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)