# Use an official Node.js runtime as a parent image
FROM node:20-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port to communicate with the React app
# EXPOSE 5173

# Start your React app
RUN npm run build

# Use NGINX as the production server
FROM nginx:1.21-alpine

# Copy the build output from the build stage to NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html/

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]


