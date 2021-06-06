FROM node:14.17.0-alpine
WORKDIR /jsapp

COPY package*.json ./
COPY index.js ./
RUN npm ci

CMD [ "node", "index.js" ]