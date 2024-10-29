FROM python:3.12-alpine as builder
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache postgresql-libs libxml2-dev libxslt-dev && apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev

COPY ./requirements.txt ./

RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

FROM python:3.12-alpine

WORKDIR /app

RUN apk add libpq

RUN --mount=type=bind,from=builder,source=/app/wheels,target=/wheels
RUN --mount=type=bind,from=builder,source=/app/requirements.txt,target=/app/

RUN pip install --no-cache /wheels/*
COPY ./ ./

EXPOSE 8000

CMD [ "uvicorn", "main:app", "--reload", "--port", "8000", "--host", "0.0.0.0"]