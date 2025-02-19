################################
### TO BUILD IMAGE
# docker build -t bloom-works/guides-template .
#
### TO RUN SERVER (requires rebuild if files change)
# docker run -it --rm -p "8080:8080" bloom-works/guides-template
#
### TO RUN TERMINAL WITH LOCAL FILES (i.e. for local development with live file mapping)
#   1. docker run -it --rm -p "8080:8080" -v "$PWD:/app" bloom-works/guides-template bash
#   2. npm install
#   3. npm run serve
################################

# Debian 11 based base image for Node.js
# We downgraded the Docker image to use Debian 11 vs Debian 12 because Playwright
# doesn't currently support OS versions above Debian 11
FROM node:22.14.0-bullseye

# Put files in /app
WORKDIR /app
COPY . .

# Build the application
RUN npm install

# Install dependencies for nunjucks linting. At time of adding, requires: Python >=3.8.0, <4.0.0
RUN apt-get update && apt-get install -y \
  pip && pip install djlint==1.31.1

# Install tools for functional tests
RUN npx playwright install --with-deps

# Install tools for accessibility tests
RUN node_modules/.bin/cypress install


# Run a server if executing the container (Port 8080 is default)
ARG PORT=8080
EXPOSE ${PORT}
CMD npm run serve --port=${PORT}
