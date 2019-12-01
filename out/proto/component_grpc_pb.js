// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_component_pb = require('../proto/component_pb.js');

function serialize_Data(arg) {
  if (!(arg instanceof proto_component_pb.Data)) {
    throw new Error('Expected argument of type Data');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Data(buffer_arg) {
  return proto_component_pb.Data.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Status(arg) {
  if (!(arg instanceof proto_component_pb.Status)) {
    throw new Error('Expected argument of type Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Status(buffer_arg) {
  return proto_component_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}


var RotateService = exports.RotateService = {
  rot: {
    path: '/Rotate/Rot',
    requestStream: false,
    responseStream: false,
    requestType: proto_component_pb.Data,
    responseType: proto_component_pb.Status,
    requestSerialize: serialize_Data,
    requestDeserialize: deserialize_Data,
    responseSerialize: serialize_Status,
    responseDeserialize: deserialize_Status,
  },
};

exports.RotateClient = grpc.makeGenericClientConstructor(RotateService);
