# Builder
FROM node:8.7.0 as builder
WORKDIR /src/app

COPY . .

RUN NODE_ENV=development npm install \
    && npm run build

FROM nginx:1.12.1-alpine as runner
WORKDIR /usr/share/nginx/html/
COPY --from=builder /src/app/build .