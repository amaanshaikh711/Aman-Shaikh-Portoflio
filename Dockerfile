# Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies strictly based on package-lock
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the Vite/React application
RUN npm run build


# Production Stage (using Nginx)
FROM nginx:alpine AS production

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add custom Nginx configuration to support SPA routing properly
# We create this inline to avoid needing a separate local file, but ideally you'd version control it.
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
