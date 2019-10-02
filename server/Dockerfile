FROM node:10

WORKDIR /usr/src/service

COPY package*.json .
COPY ./config/scripts ./config/scripts
RUN yarn install && yarn cache clean --force

COPY . .

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# RUN npm install pm2 -g

# CMD ["pm2-runtime", "dist/index"]
# CMD ["yarn", "run", "build"]
# CMD ["yarn", "run", "start"]