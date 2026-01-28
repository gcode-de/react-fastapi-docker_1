# Multi-stage Dockerfile for backend (FastAPI)
# Stage: builder - install dependencies
FROM python:3.11-slim AS builder
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Copy dependency manifests
COPY requirements.txt ./
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Stage: final
FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Copy installed packages from builder
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy application source
COPY . /app

EXPOSE 8000

# Default command - adjust if your application entrypoint differs
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
