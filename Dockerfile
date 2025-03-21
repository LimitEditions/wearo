FROM node:20.10.0

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE $PORT

CMD [ "npm", "run", "start" ]