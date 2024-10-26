from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema


class MovementBase(BaseSchema):
    title: str
    co2_per_km: float

class MovementRead(MovementBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class MovementCreate(MovementBase):
    pass

class MovementUpdate(BaseModel):
    title: str | None = Field(default=None)
    co2: float | None = Field(default=None)

# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)