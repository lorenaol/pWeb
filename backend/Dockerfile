FROM openjdk:latest AS build
COPY ./proiect/ /
RUN ./gradlew build -x test
RUN mv ./build/libs/proiect-0.1.jar app.jar 

FROM openjdk:latest
COPY --from=build app.jar ./app.jar
ENTRYPOINT ["java","-jar","./app.jar"]
