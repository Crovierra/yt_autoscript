FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5137

CMD ["npm", "run", "dev", "--", "--host"]