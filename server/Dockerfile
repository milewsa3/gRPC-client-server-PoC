FROM eclipse-temurin:11
ENV APP_HOME=/usr/app
WORKDIR ${APP_HOME}
COPY build/libs/*.jar server.jar
EXPOSE 9090
CMD [ "java", "-jar", "server.jar" ]