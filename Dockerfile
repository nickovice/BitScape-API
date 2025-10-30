FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build && npm prune --production
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]