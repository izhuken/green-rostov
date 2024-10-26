
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Product(BaseModel):
    __tablename__ = "product"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    co2: Mapped[float] = mapped_column(nullable=False, default=0)
    
    user_product: Mapped["UserProduct"] = relationship(
        back_populates="product",
    )