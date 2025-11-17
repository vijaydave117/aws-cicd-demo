FROM node:18-alpine

WORKDIR /app

# Copy only package.json files first
COPY package*.json ./

# Install dependencies cleanly inside container
RUN npm install --production

# Now copy the app — EXCLUDING local node_modules
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
