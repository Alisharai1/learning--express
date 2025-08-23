FROM node:current-alpine3.22 

WORKDIR /app

COPY . .

EXPOSE 4000

CMD ["node","index.js"]

# docker run -itd -v ./:/app -p 3000:4000 node:current-alpine3.22
# docker exec -it e sh



