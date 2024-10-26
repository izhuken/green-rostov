from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import event_router, event_user_router, file_router

app = FastAPI(prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(event_user_router, prefix="/v1")
app.include_router(event_router, prefix="/v1")
app.include_router(file_router, prefix="/v1")