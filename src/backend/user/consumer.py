import asyncio
import json
from os import getenv as env

from app.schemas.user_reword import UserRewordCreate
from confluent_kafka import Consumer
from dotenv import load_dotenv
from repository.reword import RewordRepository
from repository.user_reword import UserRewordRepository

load_dotenv()
config = {
    "bootstrap.servers": env("KAFKA_URL"),
    "group.id": "mygroup",
    "auto.offset.reset": "earliest",
}
TOPIC_EVENT = "event"
TOPIC_POINT = "point"
TOPIC_TASK = "task"
reword_repository = RewordRepository()
user_reword_repository = UserRewordRepository()
consumer = Consumer(config)
consumer.subscribe([TOPIC_EVENT, TOPIC_TASK, TOPIC_POINT])
result = asyncio.run(reword_repository.get_all_reword())

try:
    while True:
        msg = consumer.poll(5)

        if msg is None:
            print("Waiting")
        elif msg.error():
            print(f"Consumer error: {msg.error()}")
        else:
            for data in result.data:
                print(data.condition)
                # print(msg.value().decode('utf-8'))
                print(json.loads(msg.value().decode('utf-8'))["data"])
                if data.condition == json.loads(msg.value().decode('utf-8'))["data"]:
                    resutl_finish =asyncio.run(user_reword_repository.create(UserRewordCreate(**{"user_id": json.loads(msg.value().decode('utf-8'))["user_id"], "reword_id": data.id})))
                    print(resutl_finish)
            print(f"Produced event to topic {msg.topic()}: key = {msg.key()}, value = {msg.value().decode('utf-8')}")
except KeyboardInterrupt:
    pass
finally:
    consumer.close()

