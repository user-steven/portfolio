# Stage 1: Build stage
FROM --platform=linux/amd64 node:18-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build


FROM --platform=linux/amd64 node:18-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["npm", "run", "dev"]
