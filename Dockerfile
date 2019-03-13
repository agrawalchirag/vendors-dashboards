FROM mhart/alpine-node:10

WORKDIR /app

COPY . .

RUN npm i

CMD npm start
