from sqlalchemy import UUID, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from ._base import BaseModel


class UserReword(BaseModel):
    __tablename__ = "user_reword"
    
    user_id: Mapped[UUID] = mapped_column(
        ForeignKey("user.id", ondelete="CASCADE"),
        primary_key=True)
    
    reword_id: Mapped[UUID] = mapped_column(
        ForeignKey("reword.id", ondelete="CASCADE"),
        primary_key=True)