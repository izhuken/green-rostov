from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Task(BaseModel):
    __tablename__ = "task"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    rating: Mapped[int] = mapped_column(nullable=False, default=0)
    logo: Mapped["File"] = relationship(
        back_populates="task",
    )