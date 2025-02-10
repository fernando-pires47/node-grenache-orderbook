const connection = require('../connection')
const orderService = require('../storage/order.storage')
const eventConstant = require('../constants/event.constant')
const publishUpdateOrderService = require('./publish-update-order.service')

const { service: serviceServer, link: linkServer } = connection.initServer();

function consume() {
  setInterval(function () {
    linkServer.announce(eventConstant.PROCESS_ORDER, serviceServer.port, {})
  }, 1000)

  serviceServer.on('request', (rid, key, payload, handler) => {
    console.log(`*** consuming ${eventConstant.PROCESS_ORDER} **`);
    console.log(JSON.stringify(payload));

    orderService.addOrder(payload);
  
    // Store DHT
    linkServer.put({ v: JSON.stringify(payload) }, (err, hash) => {
      if (err) return handler.reply(err, null); 
      publishUpdateOrderService.publish(hash);
      handler.reply(null, { msg: `** Order processed **` })
    })
  })
}

module.exports = { consume };