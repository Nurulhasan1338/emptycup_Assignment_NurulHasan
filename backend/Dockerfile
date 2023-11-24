FROM node:18.15.0-alpine
WORKDIR /emptycup/backend
COPY package*.json /emptycup/backend
RUN npm install
COPY . .
CMD npm start