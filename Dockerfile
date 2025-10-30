FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["NODE_ENV=production", "npm", "run", "start:prod"]