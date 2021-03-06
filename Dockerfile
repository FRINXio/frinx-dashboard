# --- Build UI ---

FROM node:14.15.1-alpine as client
ENV SASS_BINARY_NAME linux-x64-59
WORKDIR /usr/app/app/
COPY app/package*.json ./
RUN npm install -qy
COPY app/ ./
RUN npm run build

# --- Setup UI server

FROM node:9.4.0-alpine as server
RUN apk --no-cache add curl
WORKDIR /usr/app/server/
COPY --from=client /usr/app/app/build/ ./build
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

EXPOSE 5001

CMD ["npm", "start"]