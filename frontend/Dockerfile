# Multi-stage Dockerfile for frontend (React + Vite)
# Stage: builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package manifests and install
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy rest and build
COPY . .
RUN npm run build

# Stage: production image with nginx
FROM nginx:stable-alpine
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
