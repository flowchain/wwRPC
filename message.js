// RPC protocols
var RPCMessage = {
    FIND_SUCCESSOR:     0,
    FOUND_SUCCESSOR:    1,
    MESSAGE:            5
};

/*
 * Export 'Node' class
 */
if (typeof(module) != "undefined" && typeof(exports) != "undefined")
  module.exports = RPCMessage;
