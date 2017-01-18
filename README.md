**wwRPC** (aka web-to-web RPC) is a light weight library in JavaScript that makes RPC calls in REST-style operations over the Websocket. wwwRPC is a sub-project of [WoT.City](https://wotcity.com) and the technical details can be found at [WoT.City white paper](https://wotcity.com/WoTCity-WhitePaper.pdf)

# wwRPC: web-to-web RPC

wwRPC uses REST-style RPC operations over the WebSocket in IoT devices. The wwRPC aims to help IoT devices to make REST-style RPC calls. In addition, it is the underlying component of [WoT.City](https://wotcity.com) software framework that can be accordingly used in a peer-to-peer IoT network.

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
