# Orderbook decentralized peer-to-peer(P2P) and broadcasting communication using Grenache
This service is a simple example to create and replicate information to all nodes, performing with grenache decentralized microservices framework through peer-to-peer(P2P) and broadcasting communication in conjunction with Grape(DHT backbone).

### Dependencies
* Grape
* Node

### Project Dependencies
* grenache-nodejs-http
* grenache-nodejs-link

### Concepts implemented

* `Peer-to-Peer(P2P)`: communication, devices (called peers) communicate directly with one another without needing a central server. Each peer can act as both a client and a server, sharing and consuming resources.
* `Broadcast`: Message is sent from one node and delivered to all nodes in the network.
* `Pub/Sub`: Publisher and consumer to communicate information between services.
* `Grenache Node`: The base component for peer discovery and communication.
* `Grenache Grape`: Acts as a Distributed Hash Table (DHT) node for service registration and lookup.
* `Grenache Client/Server`: Used to create services and send/receive requests.

![](https://github.com/fernando-pires47/node-grenache-orderbook/blob/main/images/dht-infra.png)

## Run grape

### Install

```bash
  npm install -g grenache-grape
```

### Start DHT service with two grapes

```bash
  grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
  grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
```

## Run project

To run locally:

```bash
  npm run start
```

## References

* https://blog.bitfinex.com/tutorial/bitfinex-loves-microservices-grenache/
* https://www.npmjs.com/package/grenache-grape
* https://medium.com/bitfinex/introducing-svc-js-a-framework-for-grenache-7119f2d7769e
* https://github.com/bitfinexcom/grenache-nodejs-ws

## License

This application is available under the
[MIT license](https://opensource.org/licenses/MIT).







  
