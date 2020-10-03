FROM mhart/alpine-node AS builder
WORKDIR /app/
COPY package.json .
COPY src/* ./src/
RUN npm i && npm i @vercel/ncc -g && ncc build -m src/index.js

FROM mhart/alpine-node
WORKDIR /app/
COPY --from=builder /app/dist/index.js /app/index.js
CMD ["node", "/app/index.js"]  
