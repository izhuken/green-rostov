
from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class UserMovement(BaseModel):
    __tablename__ = "user_movement"

    user_id: Mapped[UUID] = mapped_column(nullable=False)
    movement_id: Mapped[UUID] = mapped_column(ForeignKey("movement.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    km: Mapped[float] = mapped_column(nullable=False, default=0)

    movement: Mapped["Movement"] = relationship(
        back_populates="user_movement",
        )