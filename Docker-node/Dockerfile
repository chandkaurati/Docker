FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . . 

CMD ["node", "main.js"]