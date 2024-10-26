from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import (
    file_router,
    fraction_router,
    point_fraction_router,
    point_router,
    user_point_request_router,
)

app = FastAPI(prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(point_router, prefix="/v1")
app.include_router(fraction_router, prefix="/v1")
app.include_router(point_fraction_router, prefix="/v1")
app.include_router(user_point_request_router, prefix="/v1")
app.include_router(file_router, prefix="/v1")

