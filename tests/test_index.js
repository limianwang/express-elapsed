'use strict';

var chai = require('chai');
var express = require('express');
var request = require('supertest');

var expect = chai.expect;
var elasped = require('../');

describe('elasped time', function () {
  it ('should include the elasped time', function (done) {
    var app = express();
    app.use(elasped);

    app.use('/', function(req, res) {
        res.send({ foo: 'baz' });
    });

    request(app)
      .get('/')
      .expect(200, function(err, resp) {
        expect(resp)
          .to.have.property('body')
          .to.have.property('elasped_time');

        done();
      });
  });
});
