const Base = require('./Base');

class Util extends Base {}

Util.EventEmitter = require('./EventEmitter');
Util.Base = Base;

module.exports = Util;
