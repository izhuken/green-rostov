
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Movement(BaseModel):
    __tablename__ = "movement"
    
    title: Mapped[str] = mapped_column(nullable=False)
    model: Mapped[str] = mapped_column(nullable=False)
    co2_per_km: Mapped[float] = mapped_column(nullable=False, default=0)

    user_movement: Mapped["UserMovement"] = relationship(
        back_populates="movement",
    )