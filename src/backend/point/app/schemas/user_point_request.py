from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema


class UserPointRequestBase(BaseSchema):
    user_id: UUID
    point_id: UUID
    approved: bool = Field(default=False)


class UserPointRequestRead(UserPointRequestBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class UserPointRequestCreate(UserPointRequestBase):
    pass

class UserPointRequestUpdate(BaseModel):
    approved: bool


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)