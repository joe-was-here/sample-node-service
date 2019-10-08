FROM node:10-alpine

WORKDIR /usr/src/service

COPY package*.json .
COPY ./config/scripts ./config/scripts
RUN yarn install && yarn cache clean --force

COPY . .

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

USER node

CMD ["yarn", "run", "start"]