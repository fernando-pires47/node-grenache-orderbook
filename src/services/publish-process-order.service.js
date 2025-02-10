const connection = require('../connection')
const eventConstant = require('../constants/event.constant')
const publishProcessOrderQueue = require('../queues/publish-process-order.queue')

const { peer: peerClient } = connection.initClient();

function publish() {

setInterval(function () {
  if (publishProcessOrderQueue.has()) {
    const order = publishProcessOrderQueue.get();
    peerClient.request(eventConstant.PROCESS_ORDER, order, { timeout: 3000 }, (err, data) => {
      if (err) {
        console.error(`Error - event: ${eventConstant.PROCESS_ORDER}, payload: ${JSON.stringify(order)}`);
        console.error(err.message);
        return;
      }
      console.log(`Success - event: ${eventConstant.PROCESS_ORDER}, payload: ${JSON.stringify(order)}`);
      console.log(JSON.stringify(data));
    })
  }
}, 3000)
}


module.exports = { publish };