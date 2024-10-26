from core.database import SESSION
from core.models.product import Product
from dto.exception_dto import ErrorDTO
from dto.success_dto import SuccessDTO
from sqlalchemy import select
from sqlalchemy.exc import DBAPIError

from ._base_sqlalchemy_repository import BaseSQLAlchemyRepository


class ProductRepository(BaseSQLAlchemyRepository):
    model = Product

    async def search_product(self, search_field):
        statement  = select(self.model).filter(getattr(self.model, "title")==search_field)
        try:
            # print(statement)
            async with SESSION() as session:
                statement = await session.execute(statement)
                insert_data = statement.scalars().unique().all()
                
                # print(insert_data)
                if len(insert_data) == 0:
                    session.add(self.model(title=search_field, co2=23))
                    await session.commit()
                    print(insert_data)
                    return SuccessDTO(insert_data)
                else:
                    return SuccessDTO(insert_data)
        except DBAPIError as e:
            print(e)
            return ErrorDTO("Database error", 500)