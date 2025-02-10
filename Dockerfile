FROM cypress/base:14.17.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN $(npm bin)/cypress verify

RUN ["npm", "run", "cypress:run"]