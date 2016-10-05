FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "run", "postinstall"]
CMD ["npm", "run", "prebuild"]
CMD ["npm", "run", "build"]
CMD ["npm", "run", "postbuild"]
CMD ["npm", "run", "start"]

