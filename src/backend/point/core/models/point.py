from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Point(BaseModel):
    __tablename__ = "point"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    longitude: Mapped[str] = mapped_column(nullable=True, default=None)
    latitude: Mapped[str] = mapped_column(nullable=True, default=None)
    address: Mapped[str] = mapped_column(nullable=False)

    is_hidden: Mapped[bool] = mapped_column(nullable=False, default=False)
    fraction: Mapped[list["Fraction"]] = relationship(
        back_populates="point",
        secondary="point_fraction",
    )
    file: Mapped["File"] = relationship(
        back_populates="point",
        )