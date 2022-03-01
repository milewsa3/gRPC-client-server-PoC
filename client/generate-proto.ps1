Write-Host "Generating..."

$OUT = "$PWD"
$PROTO_API = "$PWD\src\proto\helloworld.proto"

protoc -I $OUT $PROTO_API --js_out=import_style=commonjs:$OUT --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT