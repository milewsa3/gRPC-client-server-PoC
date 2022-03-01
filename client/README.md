# React client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Generating proto
### Prerequisites:
* [protoc](https://github.com/protocolbuffers/protobuf/releases)
* [protoc-gen-grpc-web](https://github.com/grpc/grpc-web/releases)

⚠️ **Warrning:** put executables in $PATH

### Generation
Run script `generate-proto.ps1`

    ./generate-proto.ps1

ℹ️ Generate always after changes in `.proto` file
⚠️ Script works only on **Windows**. To run it on **Linux** just copy content of the script, replace Windows commands with Linux equivalents and run it.

## Usage
To start client, run:

    npm install
    npm start
