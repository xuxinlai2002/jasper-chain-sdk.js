// source: jasper/vault/v1/vault.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.jasper.vault.v1.PublicKeyNodeIdPair', null, global);
goog.exportSymbol('proto.jasper.vault.v1.SignOptionPayment', null, global);
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
proto.jasper.vault.v1.PublicKeyNodeIdPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.PublicKeyNodeIdPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.PublicKeyNodeIdPair.displayName = 'proto.jasper.vault.v1.PublicKeyNodeIdPair';
}
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
proto.jasper.vault.v1.SignOptionPayment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.SignOptionPayment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.SignOptionPayment.displayName = 'proto.jasper.vault.v1.SignOptionPayment';
}



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
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.PublicKeyNodeIdPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.PublicKeyNodeIdPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.jasper.vault.v1.PublicKeyNodeIdPair}
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.PublicKeyNodeIdPair;
  return proto.jasper.vault.v1.PublicKeyNodeIdPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.PublicKeyNodeIdPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.PublicKeyNodeIdPair}
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
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
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.PublicKeyNodeIdPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.PublicKeyNodeIdPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.PublicKeyNodeIdPair} returns this
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.PublicKeyNodeIdPair} returns this
 */
proto.jasper.vault.v1.PublicKeyNodeIdPair.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





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
proto.jasper.vault.v1.SignOptionPayment.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.SignOptionPayment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.SignOptionPayment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.SignOptionPayment.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    to: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chain: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 6, ""),
    proofs: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.jasper.vault.v1.SignOptionPayment}
 */
proto.jasper.vault.v1.SignOptionPayment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.SignOptionPayment;
  return proto.jasper.vault.v1.SignOptionPayment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.SignOptionPayment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.SignOptionPayment}
 */
proto.jasper.vault.v1.SignOptionPayment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChain(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProofs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
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
proto.jasper.vault.v1.SignOptionPayment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.SignOptionPayment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.SignOptionPayment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.SignOptionPayment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChain();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProofs();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string to = 3;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string amount = 4;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string chain = 5;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getChain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setChain = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payload = 6;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string proofs = 7;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getProofs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setProofs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sender = 8;
 * @return {string}
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.SignOptionPayment} returns this
 */
proto.jasper.vault.v1.SignOptionPayment.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.jasper.vault.v1);