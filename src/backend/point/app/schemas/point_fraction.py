from datetime import datetime
from uuid import UUID

from ._base import BaseSchema


class PointFractionBase(BaseSchema):
    point_id: UUID
    fraction_id: UUID


class PointFractionRead(PointFractionBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class PointFractionCreate(PointFractionBase):
    pass

# class PointFractionUpdate(BaseModel):
#     title: str | None = Field(default=None)
#     longitude: str | None = Field(default=None)
#     latitude: str | None = Field(default=None)
#     address: str | None = Field(default=None)
#     is_hidden: bool = Field(default=False)
#     logo: FileRead | None = Field(default=None)


# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)