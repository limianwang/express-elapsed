# express-elapsed


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
