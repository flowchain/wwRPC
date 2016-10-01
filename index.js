module.exports = RPC

/**
 * Represents a RPC operation.
 * @constructor
 * @param {string} from - The URI of sender.
 * @param {string} to - The URI of receiver.
 */
function RPC(from, to) {
}

/**
 * To send a RPC operation.
 * @param {object} message - The message to be sent.
 */
RPC.prototype.send = function(message) {

}

/**
 * To serialize a message.
 * @param {Object} message - The message to be serialized.
 * @returns {String} The document (string) of message (JSON object).
 */
RPC.prototype.serialize = function(message) {

}

/**
 * To deserialize a message.
 * @param {String} document - The document to be deserialized.
 * @returns {Object} JSON object of the document.
 */
RPC.prototype.deserialize = function(document) {

}
