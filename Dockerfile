FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org
RUN npm install
COPY . .
RUN npm run build

FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json 

COPY .env .

EXPOSE 4000
CMD ["npm", "start"]