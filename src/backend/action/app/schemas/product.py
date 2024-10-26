from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field

from ._base import BaseSchema


class ProductBase(BaseSchema):
    title: str
    co2: float

class ProductRead(ProductBase):
    id: UUID
    create_time: datetime
    update_time: datetime

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    title: str | None = Field(default=None)
    co2_per_km: float | None = Field(default=None)

# class UserSearch(BaseModel):
#     username: str | None = Field(default=None)
#     email: EmailStr | None = Field(default=None)
#     phone: str | None = Field(default=None)
#     address: str | None = Field(default=None)