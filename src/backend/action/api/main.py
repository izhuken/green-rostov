from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import (
    movement_router,
    product_router,
    user_movement_router,
    user_product_router,
)

app = FastAPI(prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_product_router, prefix="/v1")
app.include_router(user_movement_router, prefix="/v1")
app.include_router(movement_router, prefix="/v1")
app.include_router(product_router, prefix="/v1")
