from datetime import datetime
from uuid import UUID

from ._base import BaseSchema
from .movement import MovementRead


class UserMovementBase(BaseSchema):
    movement_id: UUID
    user_id: UUID
    km: int

class UserMovementRead(UserMovementBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class UserMovementDepthRead(UserMovementRead):
    movement: MovementRead | None

class UserMovementCreate(UserMovementBase):
    pass


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