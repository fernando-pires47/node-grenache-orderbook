const consumeUpdateOrderService = require('../services/consume-update-order.service')

function start() {
  consumeUpdateOrderService.consume();
}

module.exports = { start };
