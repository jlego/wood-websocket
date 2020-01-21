/**
 * Wood Plugin Module.
 * websocket类
 * by huangyong 2019-6-10
 */
const Websocket = require('./src/websocket');

module.exports = (app = {}, config = {}) => {
  app.Websocket = function() { return Websocket; }
  if(app.addAppProp) app.addAppProp('Websocket', app.Websocket);
  return app;
}
