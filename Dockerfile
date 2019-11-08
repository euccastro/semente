FROM openjdk:8-alpine

COPY target/uberjar/semente.jar /semente/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/semente/app.jar"]
