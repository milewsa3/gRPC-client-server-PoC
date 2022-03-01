package org.df;

import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.df.grpc.CountRequest;
import org.df.grpc.CountResponse;
import org.df.grpc.CounterGrpc;

@GrpcService
public class CounterServiceImpl extends CounterGrpc.CounterImplBase {
    @Override
    public void count(CountRequest request, StreamObserver<CountResponse> responseObserver) {
        CountResponse response = CountResponse.newBuilder().setResult(request.getNum1() + request.getNum2()).build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
