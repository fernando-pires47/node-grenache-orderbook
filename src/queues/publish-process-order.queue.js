const PUBLISH_PROCESS_ORDER_QUEUE = []


function add(payload){
  PUBLISH_PROCESS_ORDER_QUEUE.push(payload);
}

function remove(){
  PUBLISH_PROCESS_ORDER_QUEUE.shift();
}

function get(){
  if(has()){
    return PUBLISH_PROCESS_ORDER_QUEUE[0];
  }
  return null;
}

function has(){
  return PUBLISH_PROCESS_ORDER_QUEUE.length > 0
}

module.exports = { has, remove, add, get };
