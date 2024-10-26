from uuid import UUID

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class File(BaseModel):
    __tablename__ = "file"

    url: Mapped[str] = mapped_column(unique=True, nullable=False)
    
    point_id: Mapped[UUID] = mapped_column(
        ForeignKey("point.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)
    fraction_id: Mapped[UUID] = mapped_column(
        ForeignKey("fraction.id", ondelete="SET NULL"),
        nullable=True,
        default=None,)

    point: Mapped["Point"] = relationship(
        back_populates="file",
        )
    
    fraction: Mapped["Fraction"] = relationship(
        back_populates="logo",
        )
    