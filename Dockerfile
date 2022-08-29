#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.14.2-slim-chrome103-ff102

RUN mkdir /mflorenciaCypress

WORKDIR /mflorenciaCypress

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./reporter-config.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx","cypress","run"]

CMD [""]