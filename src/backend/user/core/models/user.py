
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class User(BaseModel):
    __tablename__ = "user"
    
    username: Mapped[str] = mapped_column(nullable=False, unique=True)
    email: Mapped[str] = mapped_column(nullable=False, unique=True)
    phone: Mapped[str] = mapped_column(nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    rating: Mapped[int] = mapped_column(nullable=False, default=0)
    is_admin: Mapped[bool] = mapped_column(nullable=False, default=False)
    is_active: Mapped[bool] = mapped_column(nullable=False, default=True)
    avatar: Mapped["File"] = relationship(
        back_populates="user",
    )
    reword: Mapped[list["Reword"]] = relationship(
        back_populates="user",
        secondary="user_reword",
        )