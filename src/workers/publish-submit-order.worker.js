const publishSubmitOrderService = require('../services/publish-submit-order.service')
const orderStorage = require('../storage/order.storage')
const hashUtils = require('../utils/hash.utils')


function start() {
  setInterval(() => {
    const price = Math.floor(Math.random() * 100 + 1);
    const type = Math.random() > 0.5 ? 'buy' : 'sell';
    const order = {
      id: hashUtils.generateHash12(),
      type: type, 
      amount: 1,
      price: price,
      cliIdentity: '00000',
      entity: 'Bank 001',
      dhRequest: Date.now(),
    };
    
    orderStorage.addOrder(order);
    publishSubmitOrderService.publish(order);
  }, 3000);
}

module.exports = { start };
