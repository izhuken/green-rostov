from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class File(BaseModel):
    __tablename__ = "file"

    url: Mapped[str] = mapped_column(unique=True, nullable=False)
    
    event_id: Mapped[UUID] = mapped_column(
        ForeignKey("event.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    
    event_user_id: Mapped[UUID] = mapped_column(
        ForeignKey("event_user.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)

    event: Mapped["Event"] = relationship(
        back_populates="logo",
        )
    event_files: Mapped["Event"] = relationship(
        back_populates="file",
        )
    event_user: Mapped["EventUser"] = relationship(
        back_populates="file",
        )