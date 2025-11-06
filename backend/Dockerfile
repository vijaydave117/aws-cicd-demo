# Base image (Node.js lightweight version)
FROM node:18-alpine

# Create working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of your app files
COPY . .

# Expose app port
EXPOSE 8080

# Command to start your app
CMD ["node", "index.js"]
