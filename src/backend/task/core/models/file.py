from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class File(BaseModel):
    __tablename__ = "file"

    url: Mapped[str] = mapped_column(unique=True, nullable=False)
    
    user_id: Mapped[UUID] = mapped_column(
        ForeignKey("user.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    
    reword_id: Mapped[UUID] = mapped_column(
        ForeignKey("reword.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    
    reword: Mapped["Reword"] = relationship(
        back_populates="file",
        )
    user: Mapped["User"] = relationship(
        back_populates="file",
        )