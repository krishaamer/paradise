FROM ubuntu:14.04

# Avoid interactive prompts during apt-get install
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies and legacy Node.js/npm for Meteorite (mrt)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      curl \
      ca-certificates \
      git \
      build-essential \
      python \
      nodejs \
      npm && \
    rm -rf /var/lib/apt/lists/* && \
    ln -sf /usr/bin/nodejs /usr/bin/node

# Install Meteor pinned to a legacy release compatible with Meteorite-era apps
# Note: install script honors RELEASE env var. You can override at build time:
#   docker build --build-arg RELEASE=0.8.4 -t paradise-legacy .
ARG RELEASE=0.8.3
ENV RELEASE=${RELEASE}
RUN curl -sL https://install.meteor.com/ | sh

# Install Meteorite (mrt) globally
RUN npm install -g meteorite@0.9.17 || npm install -g meteorite

WORKDIR /app

# Pre-copy only package descriptors to leverage Docker layer caching
COPY smart.json smart.lock ./

# Prime Meteorite packages cache (optional; will re-run after full copy too)
RUN mrt install || true

# Copy the rest of the app
COPY . .

# Install Meteorite packages for the full app
RUN mrt install || true

# Expose Meteor default port
EXPOSE 3000

# Environment defaults; override as needed
ENV PORT=3000 \
    ROOT_URL=http://localhost:3000 \
    MONGO_URL=mongodb://localhost:27017/meteor

# Start the app via Meteorite to honor smart.json
CMD ["bash", "-lc", "mrt run --port ${PORT}"]
