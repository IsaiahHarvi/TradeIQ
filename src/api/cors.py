import os
import warnings

from fastapi.middleware.cors import CORSMiddleware
from icecream import ic

API_URL = os.environ.get("API_URL", "localhost:8081")
ROOT_PATH = "/api"

if "localhost" in API_URL:
    warnings.warn(f"API_URL is set to {API_URL}")
ic(f"{API_URL=}\n{ROOT_PATH=}")


def configure_cors(app):
    # if "https" not in API_URL:
    if True:
        ic("Configuring CORS for dev")
        app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            # allow_origins=["http://localhost", "https://tradeiq.harville.dev", "http://127.0.0.1"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
