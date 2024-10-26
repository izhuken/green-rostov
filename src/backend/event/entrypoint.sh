#!/usr/bin/env sh

alembic upgrade head

uvicorn api.main:app --port 4001 --host 0.0.0.0