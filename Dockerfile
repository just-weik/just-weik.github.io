FROM node:16.20.0-alpine3.17

WORKDIR /app

RUN npm install -g @vue/cli

USER node

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]