#!/usr/bin/env sh

alembic upgrade head

uvicorn api.main:app --port 4003 --host 0.0.0.0