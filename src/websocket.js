// Websocket类
// by Huangyong 2019-06-10
const WS = require("ws");

class Websocket {
  constructor(opts = {}) {
    if (!opts.name) console.error("Websocket服务名不能为空！");
    this.WS = WS;
    this.wssvr = null;
    this.opts = opts;
  }

  // 初始化服务
  init(cb) {
    const wssrv = new WS.Server({ server: this.opts.server });
    this.wssvr = wssrv;
    const that = this;

    wssrv.on("connection", cb);

    setInterval(function ping() {
      wssrv.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();
        ws.isAlive = false;
        ws.ping(that.noop);
      });
    }, this.opts.intervalTime);
  }

  noop() {}

  onConnect(ws) {
    ws.isAlive = true;
    ws.on("pong", this.onHeartbeat);
  }

  onHeartbeat() {
    this.isAlive = true;
  }

  onTimeout() {}
  onError(err) {}
  onEnd() {}
  onClose() {}
}

module.exports = Websocket;
