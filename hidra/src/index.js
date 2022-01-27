const grpc = require('grpc');
const path = require('path');

const protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'pb', 'messages.proto'),
    {
        keepCase: true,
        longs: String,  
        enums: String,
        defaults: true,
        oneofs: true
    }
    );

const proto = grpc.loadPackageDefinition(packageDefinition);