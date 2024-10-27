from core.database import SESSION
from core.models.reword import Reword
from dto.exception_dto import ErrorDTO
from dto.success_dto import SuccessDTO
from sqlalchemy import select

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class RewordRepository(BaseSQLAlchemyRepository):
    model = Reword
    additional_tables = ["logo", "user"]

    async def get_all_reword(self):
        statement = select(self.model)
        statement = (
            statement.select_from(self.model)
        )
        try:
            async with SESSION() as session:
                statement = await session.execute(statement)
                data = statement.scalars().unique().all()
                return  SuccessDTO(data)
        except:
            return ErrorDTO('Database error', 500)