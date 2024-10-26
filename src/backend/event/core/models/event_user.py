
from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class EventUser(BaseModel):
    __tablename__ = "event_user"

    title: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    user_id: Mapped[UUID] = mapped_column(nullable=False)
    event_id: Mapped[UUID] = mapped_column(ForeignKey("event.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    approved: Mapped[bool] = mapped_column(nullable=False, default=False)
    file: Mapped[list["File"]] = relationship(
        back_populates="event_user",
    )