// source: jasper/vault/v1/tx.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var jasper_vault_v1_vault_pb = require('../../../jasper/vault/v1/vault_pb.js');
goog.object.extend(proto, jasper_vault_v1_vault_pb);
goog.exportSymbol('proto.jasper.vault.v1.MsgRegisterPublicKey', null, global);
goog.exportSymbol('proto.jasper.vault.v1.MsgRegisterPublicKeyResponse', null, global);
goog.exportSymbol('proto.jasper.vault.v1.MsgSignOptionPayment', null, global);
goog.exportSymbol('proto.jasper.vault.v1.MsgSignOptionPaymentResponse', null, global);
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
proto.jasper.vault.v1.MsgRegisterPublicKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.MsgRegisterPublicKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.MsgRegisterPublicKey.displayName = 'proto.jasper.vault.v1.MsgRegisterPublicKey';
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
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.MsgRegisterPublicKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.displayName = 'proto.jasper.vault.v1.MsgRegisterPublicKeyResponse';
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
proto.jasper.vault.v1.MsgSignOptionPayment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.MsgSignOptionPayment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.MsgSignOptionPayment.displayName = 'proto.jasper.vault.v1.MsgSignOptionPayment';
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
proto.jasper.vault.v1.MsgSignOptionPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jasper.vault.v1.MsgSignOptionPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jasper.vault.v1.MsgSignOptionPaymentResponse.displayName = 'proto.jasper.vault.v1.MsgSignOptionPaymentResponse';
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
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.MsgRegisterPublicKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKey}
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.MsgRegisterPublicKey;
  return proto.jasper.vault.v1.MsgRegisterPublicKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKey}
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
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
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.MsgRegisterPublicKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKey} returns this
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKey} returns this
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKey} returns this
 */
proto.jasper.vault.v1.MsgRegisterPublicKey.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse}
 */
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.MsgRegisterPublicKeyResponse;
  return proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse}
 */
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.MsgRegisterPublicKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgRegisterPublicKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.MsgSignOptionPayment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgSignOptionPayment.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    to: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chain: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 6, ""),
    proofs: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sender: jspb.Message.getFieldWithDefault(msg, 8, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.MsgSignOptionPayment;
  return proto.jasper.vault.v1.MsgSignOptionPayment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.deserializeBinaryFromReader = function(msg, reader) {
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
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
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
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.MsgSignOptionPayment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.MsgSignOptionPayment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgSignOptionPayment.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string to = 3;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string amount = 4;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string chain = 5;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getChain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setChain = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payload = 6;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string proofs = 7;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getProofs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setProofs = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sender = 8;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string memo = 9;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPayment} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPayment.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.jasper.vault.v1.MsgSignOptionPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse}
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jasper.vault.v1.MsgSignOptionPaymentResponse;
  return proto.jasper.vault.v1.MsgSignOptionPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse}
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSignature(value);
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
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jasper.vault.v1.MsgSignOptionPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jasper.vault.v1.MsgSignOptionPaymentResponse} returns this
 */
proto.jasper.vault.v1.MsgSignOptionPaymentResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.jasper.vault.v1);
