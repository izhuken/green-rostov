from sqlalchemy import UUID, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from ._base import BaseModel


class PointFraction(BaseModel):
    __tablename__ = "point_fraction"
    
    point_id: Mapped[UUID] = mapped_column(
        ForeignKey("point.id", ondelete="CASCADE"),
        primary_key=True)
    
    fraction_id: Mapped[UUID] = mapped_column(
        ForeignKey("fraction.id", ondelete="CASCADE"),
        primary_key=True)