# express-elapsed

[![Build Status](https://travis-ci.org/limianwang/express-elapsed.svg?branch=master)](https://travis-ci.org/limianwang/express-elapsed)
[![codecov](https://codecov.io/gh/limianwang/express-elapsed/branch/master/graph/badge.svg)](https://codecov.io/gh/limianwang/express-elapsed)
[![npm version](https://badge.fury.io/js/express-elapsed.svg)](https://badge.fury.io/js/express-elapsed)

## Usage

`npm install express-elapsed`

```js

var express = require('express');

var app = express();

app.use(require('express-elapsed'));

app.use('/', function (req, res) {
    res.status(200).send({ foo: 'bar' });
    // { foo: 'bar', 'elapsed_time': 1}
});

```
