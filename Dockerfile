FROM roneichiarandi/alpine-node

MAINTAINER Devparana

VOLUME /myapp

WORKDIR /myapp

RUN npm install

EXPOSE 9778

CMD ["npm", "start"]
