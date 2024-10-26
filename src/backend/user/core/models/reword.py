from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Reword(BaseModel):
    __tablename__ = "reword"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    rating: Mapped[int] = mapped_column(nullable=False, default=0)
    condition: Mapped[JSON] = mapped_column(type_ = JSON, nullable=False)
    logo: Mapped["File"] = relationship(
        back_populates="reword",
    )
    user: Mapped[list["User"]] = relationship(
        back_populates="reword",
        secondary="user_reword",
        )