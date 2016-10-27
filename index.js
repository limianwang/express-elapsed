'use strict';

module.exports = function (req, res, next) {
  var _send = res.send;

  var start = new Date();

  res.send = function (data) {
    if (typeof data === 'object') {
      data.elapsed_time = new Date() - start;
    }

    _send.call(res, data);

    return this;
  };

  next();
};
