import requests
from repository.movement import MovementRepository
from repository.user_movements import UserMovementRepository

from app.schemas.movement import MovementCreate, MovementRead
from app.schemas.response import ErrorResponse, SuccessResponse
from app.schemas.user_movement import (
    UserMovementCreate,
    UserMovementDepthRead,
    UserMovementRead,
    UserMovementResult,
    UserMovenentInsert,
)

from ._base_service import BaseService


class UserMovementService(BaseService):
    _repository = UserMovementRepository()
    _serializer = UserMovementRead
    _result_serializer = UserMovementResult
    _extension_serializer = MovementRead
    _extension_serializer_create = MovementCreate
    _serializer_create = UserMovementCreate
    _extension_repository = MovementRepository()
    _depth_serializer = UserMovementDepthRead

    async def create(self, data: UserMovenentInsert, **kwargs) -> SuccessResponse | ErrorResponse:
        # result = {"user_movement": [], "movement": []}
        reg = requests.post("https://www.carboninterface.com/api/v1/auth/", headers = {"Authorization": "Bearer nckx3m4B3yWL5YCIBrXWlQ"})
        all_cars = requests.get("https://www.carboninterface.com/api/v1/vehicle_makes", headers = {"Authorization": "Bearer nckx3m4B3yWL5YCIBrXWlQ"})
        for car in all_cars.json():
            if car["data"]["attributes"]["name"] == data.mark:
                all_concrete_cars = requests.get(f"https://www.carboninterface.com/api/v1/vehicle_makes/{car['data']['id']}/vehicle_models", headers = {"Authorization": "Bearer nckx3m4B3yWL5YCIBrXWlQ"})
                # print(all_concrete_cars)
                for concrete_car in all_concrete_cars.json():
                    # print(concrete_car)
                    if concrete_car["data"]["attributes"]["name"] == data.model:
                        print(concrete_car["data"]["id"])
                        result_data = requests.post("https://www.carboninterface.com/api/v1/estimates", headers = {"Authorization": "Bearer nckx3m4B3yWL5YCIBrXWlQ"}, json={"type": "vehicle", "distance_unit": "km", "distance_value": data.distance_value, "vehicle_model_id": concrete_car["data"]["id"]})
                        break

        carbon_per_km = result_data.json()["data"]["attributes"]["carbon_kg"]/result_data.json()["data"]["attributes"]["distance_value"]
        
        insert_movement = {"title": data.mark, "model": data.model, "co2_per_km": carbon_per_km}
        result_movement = await self._extension_repository.create(self._extension_serializer_create(**insert_movement))
        
        if hasattr(result_movement, "detail"):
            return ErrorResponse(detail=result_movement.detail, status_code=result_movement.status_code)

        insert_user_movement = {"movement_id": str(result_movement.data.id), "user_id": data.user_id, "km": result_data.json()["data"]["attributes"]["distance_value"]}
        result_user_movement = await self._repository.create(self._serializer_create(**insert_user_movement))
        
        if hasattr(result_movement, "detail"):
            return ErrorResponse(detail=result_movement.detail, status_code=result_movement.status_code)
        
        return self._result_serializer(user_movement=result_user_movement.data, movement=result_movement.data)