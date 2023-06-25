FROM node:16

WORKDIR /myproject/
COPY ./package.json /myproject/
COPY ./yarn.lock /myproject/
RUN yarn install
COPY . /myproject/
CMD yarn start:dev


