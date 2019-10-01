FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install && yarn cache clean --force

COPY . .

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

CMD ["yarn", "run", "start:prod"]