FROM node:latest
WORKDIR /app
COPY ./front-end/package*.json /app
RUN npm install
COPY ./front-end .
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
