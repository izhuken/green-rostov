from datetime import datetime
from uuid import UUID

from pydantic import BaseModel

from ._base import BaseSchema
from .product import ProductRead


class UserProductBase(BaseSchema):
    product_id: UUID
    user_id: UUID
    quantity: int

class UserProductInsert(BaseModel):
    qrraw: str
    user_id: UUID



class UserProductRead(UserProductBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class UserProductResult(BaseSchema):
    user_product: list[UserProductRead]
    product: list[ProductRead]

class UserProductDepthRead(UserProductRead):
    product: ProductRead | None


class UserProductCreate(UserProductBase):
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