
const connection = require('../connection')
const eventConstant = require('../constants/event.constant')

const { peer: peerClient } = connection.initClient();

function publish(payload) {
  peerClient.request(eventConstant.SUBMIT_ORDER, payload, { timeout: 10000 }, (err, data) => {
    if (err) {
      console.error(`Error - event: ${eventConstant.SUBMIT_ORDER}, payload: ${JSON.stringify(payload)}`);
      console.error(err.message);
      return;
    }
    console.log(`Success - event: ${eventConstant.SUBMIT_ORDER}, payload: ${JSON.stringify(payload)}`);
    console.log(JSON.stringify(data));
  })
}

module.exports = { publish };