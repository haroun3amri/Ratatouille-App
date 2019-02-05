FROM node:9
RUN ln -fs /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN apt-get update \
	&& apt-get install -y chromium
ENV CHROME_BIN=chromium