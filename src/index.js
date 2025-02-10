
const publishSubmitOrderWorker = require('./workers/publish-submit-order.worker');
const consumeSubmitOrderWorker = require('./workers/consume-submit-order.worker');
const consumeProcessOrderWorker = require('./workers/consume-process-order.worker');
const consumeUpdateOrderWorker = require('./workers/consume-update-order.worker');


publishSubmitOrderWorker.start();
consumeSubmitOrderWorker.start();
consumeProcessOrderWorker.start();
consumeUpdateOrderWorker.start();
