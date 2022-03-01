package org.df;

import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.df.grpc.HelloReply;
import org.df.grpc.HelloRequest;
import org.df.grpc.SimpleGrpc;

@GrpcService
public class SimpleServiceImpl extends SimpleGrpc.SimpleImplBase {
    @Override
    public void sayHello(HelloRequest request, StreamObserver<HelloReply> responseObserver) {
        HelloReply reply = HelloReply.newBuilder().setMessage("Hello: " + request.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
