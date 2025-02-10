let ORDERS_BOOK = []

function getOrders() {
  return ORDERS_BOOK;
}

function setOrders(orders) {
  ORDERS_BOOK = orders;
}

function addOrder(order) {
  ORDERS_BOOK.push(order);
}

module.exports = { setOrders, getOrders, addOrder }