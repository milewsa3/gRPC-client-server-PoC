
# Enovy proxy

Envoy is an open source edge and service proxy. 
It is created to convert requests using protocol **HTTP 1.1** to **HTTP 2.0** 
since gRPC is operating on that protocol.  


## Prerequisites

You need to have installed:

* docker
* docker desktop (optionally)


## Configuration

The provided envoy.yaml file provide default configuration needed to run envoy properly.
Mental image of HTTP calls will be this:
* Browser call SimpleService method on port 8080 via HTTP 1.1.
* Docker running on 9091 receives the call and makes HTTP/2 call to gRPC running on 9090 passing the URL address and request params.
* gRPC server sends a response to the Envoy via HTTP/2 on 9091, Envoy sends the response to the browser client via HTTP 1.1 on port 3000.
## Build

    docker build -t proxy-grpc .

## Run

    docker run -d --name proxy-grpc -p 8080:8080 -p 9901:9901 proxy-grpc