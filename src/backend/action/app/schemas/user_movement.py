from datetime import datetime
from uuid import UUID

from pydantic import BaseModel

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


class UserMovenentInsert(BaseModel):
    mark: str
    model: str
    distance_value: int
    user_id: UUID

class UserMovementResult(BaseSchema):
    user_movement: UserMovementRead
    movement: MovementRead

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