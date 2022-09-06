#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:6.8.0

RUN mkdir /mflorenciaCypress

WORKDIR /mflorenciaCypress

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./reporter-config.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx","cypress","run"]

CMD [""]