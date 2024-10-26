from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Fraction(BaseModel):
    __tablename__ = "fraction"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    is_hidden: Mapped[bool] = mapped_column(nullable=False, default=False)
    logo: Mapped["File"] = relationship(
        back_populates="fraction",
    )
    point: Mapped[list["Point"]] = relationship(
        back_populates="fraction",
        secondary="point_fraction",
    )
