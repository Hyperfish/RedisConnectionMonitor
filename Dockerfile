FROM node:7

ENV REDIS_HOST ''
ENV REDIS_KEY ''

RUN apt-get update &&\
    apt-get -y install redis-tools &&\
    apt-get clean

ADD . /app

CMD ["node", "./app/app.js"]