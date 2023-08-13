FROM --platform=linux/amd64 node:latest

WORKDIR /app

COPY . .

RUN npm install --verbose

RUN npm run build --verbose

EXPOSE 3000

CMD [ "npm", "start" ]