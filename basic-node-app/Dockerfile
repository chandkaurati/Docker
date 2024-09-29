FROM node AS base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 

FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production 
COPY . .
CMD ["npm", "run", "start"]



