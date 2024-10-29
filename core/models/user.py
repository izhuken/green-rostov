from datetime import datetime

from sqlalchemy import DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class User(BaseModel):
    __tablename__ = "user"
    
    username: Mapped[str] = mapped_column(nullable=False, unique=True)
