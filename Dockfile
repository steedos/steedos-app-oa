FROM node:12.16.3

ADD . /app

WORKDIR /app

RUN npm config set registry http://registry.npm.taobao.org/

RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install --production

ENV NODE_ENV=production

CMD ["yarn", "start"]