FROM ubuntu/apache2:latest

RUN apt-get update
RUN apt-get install curl vim nano git -y
RUN apt-get install npm nodejs -y

RUN a2enmod rewrite
RUN a2enmod headers

COPY portfolio.conf /etc/apache2/sites-available/portfolio.conf
COPY . /var/www/html

RUN cd /var/www/html && npm install

RUN cd /var/www/html && npm run build


RUN a2dissite 000-default.conf
RUN a2ensite portfolio.conf

RUN service apache2 restart