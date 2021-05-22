 FROM node:12.18-alpine
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5600
CMD [ "node", "index.js" ]