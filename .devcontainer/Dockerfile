FROM debian:bookworm-slim

ARG HUGO_VERSION=0.140.0
ARG GO_VERSION=1.21.0
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=1000

# Detect architecture for cross-platform support
RUN ARCH="$(dpkg --print-architecture)" && echo "Building for ${ARCH}"

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    ca-certificates \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install Go
RUN ARCH="$(dpkg --print-architecture)" \
    && curl -fsSL "https://go.dev/dl/go${GO_VERSION}.linux-${ARCH}.tar.gz" \
    | tar -C /usr/local -xz

ENV PATH="/usr/local/go/bin:${PATH}"

# Install Hugo Extended
RUN ARCH="$(dpkg --print-architecture)" \
    && curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${ARCH}.tar.gz" \
    | tar -C /usr/local/bin -xz hugo

# Create non-root user
RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} \
    && echo "${USERNAME} ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

# Fix ARG scope - re-declare so it's visible to ENV
ARG USERNAME=vscode
ENV GOPATH="/home/${USERNAME}/go"
ENV GOMODCACHE="/home/${USERNAME}/go/pkg/mod"
ENV PATH="/home/${USERNAME}/go/bin:/usr/local/go/bin:${PATH}"

USER ${USERNAME}
WORKDIR /workspaces/lotusdocs