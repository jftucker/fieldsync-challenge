FROM node:alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]