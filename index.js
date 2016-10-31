'use strict';

module.exports = function (req, res, next) {
  var _send = res.send;

  var start = process.hrtime();

  res.send = function (data) {
    if (typeof data === 'object') {
      // hrtime[0] is seconds, hrtime[1] is nanoseconds
      // hrend[0], hrend[1]/1000000 could be formatted like so:
      // console.info("elapsed time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
      // prevents clock drifts :)
      data.elapsed_time = process.hrtime(start)[0];
    }

    _send.call(res, data);

    return this;
  };

  next();
};
