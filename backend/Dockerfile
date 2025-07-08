#Using node version 22 as our base image
FROM node:22

#Goes to app directory
WORKDIR /app

#Copy package.json and package.-lock.json
COPY package*.json ./

#Install app dependencies
RUN npm install

#Copy everyfile
COPY . .

ENV PORT=3000

CMD ["npm", "start"]