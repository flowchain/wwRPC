**wwRPC**, web-to-web RPC, is a lightweight and very fast RPC (remote producre call) implementation in Node.js for a peer-to-peer IoT network.

# wwRPC: web-to-web RPC

wwRPC uses REST-style RPC operations over WebSocket for Web of Things. wwRPC aims to support REST-style physical devices and virtual things. It is the underlying infrastructure of [WoT.City](https://wotcity.com) software framework for a peer-to-peer and machine-to-machine IoT network. It also aims to support [RPC-style endpoints](https://github.com/DevifyPlatform/devify-server/tree/master/templates/201-web-of-things-dashboard).

## API

#### `rpc = new RPC(from, to)`

Create a new wwRPC instance.

* **from** is the URI of the sender, for example ```ws://wot.city/object/2fc89af```
* **to** is the URI of the receiver, for example ```ws://wot.city/object/2fc89af/send```

#### `rpc.send(message)`

Send a RPC message. ```message``` must be serialized before sending.

#### `rpc.serialize(message)`

Serializ a RPC message. 

#### `rpc.deserialize(message)`

Deserialize a RPC message.
