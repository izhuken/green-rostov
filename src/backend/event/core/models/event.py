from uuid import UUID

from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Event(BaseModel):
    __tablename__ = "event"
    
    title: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    rating: Mapped[int] = mapped_column(nullable=False, default=0)
    creator_id: Mapped[UUID] = mapped_column(nullable=False)
    
    logo: Mapped["File"] = relationship(
        back_populates="event",
    )
    
    file: Mapped[list["File"]] = relationship(
        back_populates="event_files",
    )