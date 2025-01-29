# Use a specific Node.js version (e.g., node:18)
FROM node:18

# Set the working directory
WORKDIR /src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app (if needed)
RUN npm run build

# Start the app
CMD ["npm", "start"]
