
from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class UserProduct(BaseModel):
    __tablename__ = "user_product"

    user_id: Mapped[UUID] = mapped_column(nullable=False)
    product_id: Mapped[UUID] = mapped_column(ForeignKey("product.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    quantity: Mapped[int] = mapped_column(nullable=False, default=0)
    product: Mapped["Product"] = relationship(
        back_populates="user_product",
    )