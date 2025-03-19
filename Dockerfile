FROM node:22.14-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./entrypoint.sh

EXPOSE 3001

CMD ["/bin/bash", "./entrypoint.sh"]