# Development stage
FROM node:alpine AS development

# Set working directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build


# Production stage
FROM node:alpine AS production

# Set environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory again in production
WORKDIR /usr/src/app

# Copy dependency definitions again (if lock file is needed)
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built output from development stage
COPY --from=development /usr/src/app/dist ./dist

# Default command
CMD ["node", "dist/app/assistant/main"]
