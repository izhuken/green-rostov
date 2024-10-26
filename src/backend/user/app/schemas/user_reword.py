from datetime import datetime
from uuid import UUID

from ._base import BaseSchema
from .reword import RewordRead
from .user import UserRead


class UserRewordBase(BaseSchema):
    user_id: UUID
    reword_id: UUID


class UserRewordRead(UserRewordBase):
    id: UUID
    create_time: datetime


class UserRewordDepthRead(UserRewordRead):
    user: UserRead
    reword: RewordRead


class UserRewordCreate(UserRewordBase):
    pass


# class UserRewordUpdate(UserRewordBase):
#     pass