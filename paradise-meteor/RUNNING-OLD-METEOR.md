Running this legacy Meteor (Meteorite) app via Docker

Overview

- This project predates Meteor 1.0 and uses Meteorite (mrt) and smart.json.
- The repo is missing modern `.meteor` metadata, so running with a current Meteor tool won’t work.
- The provided Dockerfile pins to Ubuntu 14.04, installs Meteor 0.8.3 and Meteorite, and runs the app via `mrt`.

Quick Start

1) Build the image
   docker build -t paradise-legacy .

2) Run the container
   docker run --rm -it -p 3000:3000 \
     -e PORT=3000 \
     -e ROOT_URL=http://localhost:3000 \
     paradise-legacy

3) Open the app
  http://localhost:3000

Notes and Troubleshooting

- Meteor version: The Dockerfile installs Meteor release 0.8.3, which aligns with the era of the `smart.json` commit (2013). If the install server no longer serves that release on your network, try a nearby version by rebuilding with:
  docker build --build-arg RELEASE=0.8.4 -t paradise-legacy .
  And adjust the Dockerfile’s `ENV RELEASE` accordingly if it works.

- Meteorite packages: The image runs `mrt install` during build to fetch smart packages from Git. If a package repo has moved or disappeared, you may need to edit `smart.json` to point to a fork or remove the package.

- MongoDB: Legacy Meteor bundles MongoDB internally; no external Mongo is required. If you prefer an external Mongo, set `MONGO_URL` accordingly when running the container.

- OAuth (Facebook, etc.): The UI references `Meteor.loginWithFacebook`. Without valid app credentials configured, those flows won’t complete. For local testing, avoid clicking those flows or configure app credentials in the environment and any legacy settings expected by the packages.

- Ports: The container exposes port 3000. Map to a local port with `-p 3000:3000`.

- Logs: If the app crashes on startup, run an interactive shell to debug:
  docker run --rm -it paradise-legacy bash
  Then inside the container run `mrt run` to see full logs.

Local (non‑Docker) Option

If you prefer to run locally without Docker (and accept installing legacy tooling):

1) Install Node 0.10 (e.g., via nvm)
   nvm install 0.10
   nvm use 0.10

2) Install Meteor 0.8.3
   RELEASE=0.8.3 curl -sL https://install.meteor.com/ | sh

3) Install Meteorite globally
   npm install -g meteorite@0.9.17

4) From the project directory, install packages and run
   mrt install
   mrt run

Note: This path modifies your local environment with very old Node/npm and Meteor. Prefer Docker for isolation.
