#!/bin/bash

curl -LsSf https://astral.sh/uv/install.sh | sh

uv pip install -r .devcontainer/requirements.txt

bun install --cwd src/web
