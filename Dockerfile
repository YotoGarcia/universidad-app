FROM node:20


WORKDIR /universidad-app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 4001


CMD ["node", "index.js"]
