
# Spring boot server

A server made in Spring Boot to implement gRPC methods 
generated from `.proto` files.




## Technologies
Project was created with:
* [gRPC-Spring-Boot-Starter](https://yidongnan.github.io/grpc-spring-boot-starter/en/)
* [jUnit 5](https://junit.org/junit5/)
## Generating proto
To generate proto use gradle task `generateProto`

    ./gradlew generateProto
## Usage
To run project simply run gradle task `bootRun`:

    ./gradlew bootRun

ℹ️ This task will automaticly generate proto and start the server