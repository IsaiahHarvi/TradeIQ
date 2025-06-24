from fastapi import FastAPI

from api.cors import ROOT_PATH, configure_cors
from api.db import engine
from api.models import Base
from api.routers import health

Base.metadata.create_all(bind=engine)


def create_app():
    app = FastAPI(
        root_path=ROOT_PATH,
    )
    configure_cors(app)

    app.include_router(health.router, prefix="/health")

    return app


app = create_app()


@app.get("/")
async def root():
    return {"message": "Hello World"}
