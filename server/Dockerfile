FROM node:16.13.1 AS builder
WORKDIR /app/build

COPY . ./

RUN npm install
RUN npm run build

FROM node:16.13.1-alpine

COPY --from=builder /app/build ./

CMD ["npm", "run", "start:prod"]