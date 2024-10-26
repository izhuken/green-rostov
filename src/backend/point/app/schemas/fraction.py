from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema
from .file import FileRead


class FractionBase(BaseSchema):
    title: str
    description: str
    is_hidden: bool = Field(default=False)

class FractionRead(FractionBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class FractionDepthRead(FractionRead):
    logo: FileRead | None

class FractionCreate(FractionBase):
    pass

class FractionUpdate(BaseModel):
    title: str | None = Field(default=None)
    description: str | None = Field(default=None)
    is_hidden: bool = Field(default=False)
    logo: FileRead | None = Field(default=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)