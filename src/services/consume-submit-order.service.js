const connection = require('../connection')
const publishProcessOrderQueue = require('../queues/publish-process-order.queue')
const eventConstant = require('../constants/event.constant')

const { service: serviceServer, link: linkServer } = connection.initServer();

function consume() {

  setInterval(function () {
    linkServer.announce(eventConstant.SUBMIT_ORDER, serviceServer.port, {})
  }, 1000)
  
  serviceServer.on('request', (rid, key, payload, handler) => {
    console.log(`*** consuming ${eventConstant.SUBMIT_ORDER} **`);
    console.log(JSON.stringify(payload));
    publishProcessOrderQueue.add(payload);
    handler.reply(null, { msg: `** Order submitted **` })
  })
}

module.exports = { consume };



