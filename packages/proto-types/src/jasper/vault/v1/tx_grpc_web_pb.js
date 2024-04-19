/**
 * @fileoverview gRPC-Web generated client stub for jasper.vault.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: jasper/vault/v1/tx.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var jasper_vault_v1_vault_pb = require('../../../jasper/vault/v1/vault_pb.js')
const proto = {};
proto.jasper = {};
proto.jasper.vault = {};
proto.jasper.vault.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.jasper.vault.v1.MsgClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.jasper.vault.v1.MsgPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.jasper.vault.v1.MsgRegisterPublicKey,
 *   !proto.jasper.vault.v1.MsgRegisterPublicKeyResponse>}
 */
const methodDescriptor_Msg_RegisterPublicKey = new grpc.web.MethodDescriptor(
  '/jasper.vault.v1.Msg/RegisterPublicKey',
  grpc.web.MethodType.UNARY,
  proto.jasper.vault.v1.MsgRegisterPublicKey,
  proto.jasper.vault.v1.MsgRegisterPublicKeyResponse,
  /**
   * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.deserializeBinary
);


/**
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.jasper.vault.v1.MsgRegisterPublicKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.jasper.vault.v1.MsgClient.prototype.registerPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/jasper.vault.v1.Msg/RegisterPublicKey',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterPublicKey,
      callback);
};


/**
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse>}
 *     Promise that resolves to the response
 */
proto.jasper.vault.v1.MsgPromiseClient.prototype.registerPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/jasper.vault.v1.Msg/RegisterPublicKey',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterPublicKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.jasper.vault.v1.MsgSignOptionPayment,
 *   !proto.jasper.vault.v1.MsgSignOptionPaymentResponse>}
 */
const methodDescriptor_Msg_SignOptionPayment = new grpc.web.MethodDescriptor(
  '/jasper.vault.v1.Msg/SignOptionPayment',
  grpc.web.MethodType.UNARY,
  proto.jasper.vault.v1.MsgSignOptionPayment,
  proto.jasper.vault.v1.MsgSignOptionPaymentResponse,
  /**
   * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.jasper.vault.v1.MsgSignOptionPaymentResponse.deserializeBinary
);


/**
 * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.jasper.vault.v1.MsgSignOptionPaymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.jasper.vault.v1.MsgSignOptionPaymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.jasper.vault.v1.MsgClient.prototype.signOptionPayment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/jasper.vault.v1.Msg/SignOptionPayment',
      request,
      metadata || {},
      methodDescriptor_Msg_SignOptionPayment,
      callback);
};


/**
 * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.jasper.vault.v1.MsgSignOptionPaymentResponse>}
 *     Promise that resolves to the response
 */
proto.jasper.vault.v1.MsgPromiseClient.prototype.signOptionPayment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/jasper.vault.v1.Msg/SignOptionPayment',
      request,
      metadata || {},
      methodDescriptor_Msg_SignOptionPayment);
};


module.exports = proto.jasper.vault.v1;

