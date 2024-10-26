from datetime import datetime
from uuid import UUID

from ._base import BaseSchema


class FileBase(BaseSchema):
    task_approvement_id: UUID | None = None
    task_id: UUID | None = None


class FileCreate(FileBase):
    pass

class FileRead(FileCreate):
    id: UUID
    url: str
    create_time: datetime



class FileUpdate(FileBase):
    pass