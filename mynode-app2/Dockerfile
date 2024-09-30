FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . .

expose 8080

CMD ["node", "index.js"]
