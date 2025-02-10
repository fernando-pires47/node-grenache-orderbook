
const connection = require('../connection')
const eventConstant = require('../constants/event.constant')
const orderStorage = require('../storage/order.storage')

const { service: serviceServer, link: linkServer } = connection.initServer();

function consume() {
  setInterval(function () {
    linkServer.announce(eventConstant.UPDATE_ORDER, serviceServer.port, {})
  }, 1000)
  
  serviceServer.on('request', (rid, key, payload, handler) => {
    console.log(`*** consuming ${eventConstant.UPDATE_ORDER} **`);
    console.log(JSON.stringify(payload));
    linkServer.get(payload, (err, res) => {
      if (res) {
        const order = JSON.parse(res.v);
        orderStorage.addOrder(order)
      }
    })
    handler.reply(null, { msg: `** Order updated **` })
  })
}

module.exports = { consume };


