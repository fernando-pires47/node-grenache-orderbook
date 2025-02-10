const consumeProcessOrderService = require('../services/consume-process-order.service')

function start() {
  consumeProcessOrderService.consume();
}

module.exports = { start };
