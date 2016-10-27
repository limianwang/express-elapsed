'use strict';

var chai = require('chai');
var express = require('express');
var request = require('supertest');

var expect = chai.expect;
var elapsed = require('../');

describe('elapsed time', function () {
  it ('should include the elapsed time', function (done) {
    var app = express();
    app.use(elapsed);

    app.use('/', function(req, res) {
        res.send({ foo: 'baz' });
    });

    request(app)
      .get('/')
      .expect(200, function(err, resp) {
        expect(resp)
          .to.have.property('body')
          .to.have.property('elapsed_time');

        done();
      });
  });
});
