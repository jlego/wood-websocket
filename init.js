const WebSocket = require('./src/websocket');


module.exports = async (app = {}, config = {}) => {
  const option = config.option;
  const websocket = new WebSocket(option);
  websocket.init(config);
  return app;
}
