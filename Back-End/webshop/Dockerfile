FROM maven:3.8.2-jdk-8

WORKDIR /webshop
COPY . .
RUN mvn clean install
RUN mvn spring-boot:run