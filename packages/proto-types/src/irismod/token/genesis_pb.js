// source: irismod/token/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');

var irismod_token_token_pb = require('../../irismod/token/token_pb.js');

goog.exportSymbol('proto.irismod.token.GenesisState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.token.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.token.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.irismod.token.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.token.GenesisState.displayName = 'proto.irismod.token.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.token.GenesisState.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.token.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.token.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.token.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && irismod_token_token_pb.Params.toObject(includeInstance, f),
    tokensList: jspb.Message.toObjectList(msg.getTokensList(),
    irismod_token_token_pb.Token.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.token.GenesisState}
 */
proto.irismod.token.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.token.GenesisState;
  return proto.irismod.token.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.token.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.token.GenesisState}
 */
proto.irismod.token.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new irismod_token_token_pb.Params;
      reader.readMessage(value,irismod_token_token_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new irismod_token_token_pb.Token;
      reader.readMessage(value,irismod_token_token_pb.Token.deserializeBinaryFromReader);
      msg.addTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.token.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.token.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.token.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      irismod_token_token_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      irismod_token_token_pb.Token.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.irismod.token.Params}
 */
proto.irismod.token.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.irismod.token.Params} */ (
    jspb.Message.getWrapperField(this, irismod_token_token_pb.Params, 1));
};


/**
 * @param {?proto.irismod.token.Params|undefined} value
 * @return {!proto.irismod.token.GenesisState} returns this
*/
proto.irismod.token.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.token.GenesisState} returns this
 */
proto.irismod.token.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.token.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Token tokens = 2;
 * @return {!Array<!proto.irismod.token.Token>}
 */
proto.irismod.token.GenesisState.prototype.getTokensList = function() {
  return /** @type{!Array<!proto.irismod.token.Token>} */ (
    jspb.Message.getRepeatedWrapperField(this, irismod_token_token_pb.Token, 2));
};


/**
 * @param {!Array<!proto.irismod.token.Token>} value
 * @return {!proto.irismod.token.GenesisState} returns this
*/
proto.irismod.token.GenesisState.prototype.setTokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.irismod.token.Token=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.token.Token}
 */
proto.irismod.token.GenesisState.prototype.addTokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.irismod.token.Token, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.token.GenesisState} returns this
 */
proto.irismod.token.GenesisState.prototype.clearTokensList = function() {
  return this.setTokensList([]);
};


goog.object.extend(exports, proto.irismod.token);
