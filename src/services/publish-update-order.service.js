const connection = require('../connection')
const eventConstant = require('../constants/event.constant')

const { peer: peerClient } = connection.initClient();

/* Publish broadcast */ 
function publish(hash) {
  peerClient.map(eventConstant.UPDATE_ORDER, hash, { timeout: 2000 }, (err, data) => {
    if (err) {
      console.error(`Error - event: ${eventConstant.UPDATE_ORDER}, hash: ${hash}`);
      console.error(err.message)
      return;
    }
    console.log(`Success - event: ${eventConstant.UPDATE_ORDER}, hash: ${hash}`);
    console.log(JSON.stringify(data));
  });
}

module.exports = { publish };