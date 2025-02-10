const consumeSubmitOrderService = require('../services/consume-submit-order.service')
const publishProcessOrderService = require('../services/publish-process-order.service')

function start() {
  consumeSubmitOrderService.consume();
  publishProcessOrderService.publish();
}

module.exports = { start };
