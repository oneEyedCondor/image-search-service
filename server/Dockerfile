FROM node:13-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
EXPOSE 4000
CMD ["node", "/app/index.js"]