from slqalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ._base import BaseModel


class Reword(BaseModel):
    __tablename__ = "reword"
    
    title: Mapped[str] = mapped_column(nullable=False, unique=True)
    description: Mapped[str] = mapped_column(nullable=True, default=None)
    rating: Mapped[int] = mapped_column(nullable=False, default=0)
    condition: Mapped[JSONB] = mapped_column(nullable=False)
    logo: Mapped["File"] = relationship(
        back_populates="reword",
    )
