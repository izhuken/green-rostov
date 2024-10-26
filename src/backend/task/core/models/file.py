from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class File(BaseModel):
    __tablename__ = "file"

    url: Mapped[str] = mapped_column(unique=True, nullable=False)
    
    task_approvement_id: Mapped[UUID | None] = mapped_column(
        ForeignKey("task_approvement.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    
    task_id: Mapped[UUID | None] = mapped_column(
        ForeignKey("task.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    
    task: Mapped["Task"] = relationship(
        back_populates="logo",
        )
    task_approvement: Mapped["TaskApprovement"] = relationship(
        back_populates="file",
        )