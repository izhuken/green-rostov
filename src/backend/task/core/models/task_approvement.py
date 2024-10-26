
from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class TaskApprovement(BaseModel):
    __tablename__ = "task_approvement"

    description: Mapped[str] = mapped_column(nullable=True, default=None)
    user_id: Mapped[UUID] = mapped_column(nullable=False)
    task_id: Mapped[UUID] = mapped_column(ForeignKey("task.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    file: Mapped[list["File"]] = relationship(
        back_populates="task_approvement",
    )