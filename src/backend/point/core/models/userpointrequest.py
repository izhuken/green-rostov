from uuid import UUID

from sqlaclhemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from ._base import BaseModel


class Point(BaseModel):
    __tablename__ = "point"
    
    user_id: Mapped[UUID] = mapped_column(nullable=False)
    point_id: Mapped[UUID | None] = mapped_column(
        ForeignKey("point.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    approved: Mapped[bool] = mapped_column(nullable=False, default=False) 