FROM node:14

WORKDIR /express_mongo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# CMD ["npm", "start" ]
CMD ["npm", "run", "dev"]
