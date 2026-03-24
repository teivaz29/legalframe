FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm instal --production

COPY . .

CMD ["node", "legalframe.js"]
