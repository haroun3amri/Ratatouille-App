FROM node:9
WORKDIR /var/opt/client
RUN ln -fs /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN apt-get update \
	&& apt-get install -y chromium
ENV CHROME_BIN=chromium
CMD npm install && npm run-script ng serve -- --host 0.0.0.0