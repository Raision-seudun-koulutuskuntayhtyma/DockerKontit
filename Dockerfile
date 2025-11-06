# Load Node.js LTS version based on Debian Trixie
FROM node:lts-trixie-slim

# Create application directory even if does not exist
RUN mkdir -p /opt/kontti

# Give ownership of the application directory to the node user
RUN chown -R node:node /opt/kontti

# Set working directory
WORKDIR /opt/kontti

# Copy package.json and package-lock.json files
COPY --chown=node:node package*.json ./

# Change to node user
USER node

# Install application dependencies
RUN npm install

# Copy application source code
COPY --chown=node:node . .

# Expose application port
EXPOSE 8080

# Start the application
CMD [ "node" , "app.js" ]

    