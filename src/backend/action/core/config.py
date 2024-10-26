from os import getenv as env

from dotenv import load_dotenv

load_dotenv()

SQLALCHEMY_DATABASE_URL = env("DB_LINK")

SECRET_KEY = env("SECRET_KEY")