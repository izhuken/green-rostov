FROM python:3.12-alpine as builder
WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

RUN apk add --no-cache postgresql-libs libxml2-dev libxslt-dev && apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev

COPY ./requirements.txt ./

RUN pip install --no-cache-dir wheel
RUN pip wheel --no-cache-dir --wheel-dir /app/wheels -r requirements.txt

FROM python:3.12-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Install the wheels
RUN --mount=type=bind,from=builder,source=/app/wheels,target=/wheels pip install --no-cache-dir --no-index --find-links=/wheels /wheels/*

# Set file permissions and ownership
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Copy the rest of the application code into the container
COPY . .

EXPOSE 8000

CMD [ "uvicorn", "api.main:app", "--reload", "--port", "8000", "--host", "0.0.0.0"]
