var apiController = require('../controllers/api.js');
var assert        = require('assert');
var Data          = require('../models/data.js');
var app           = require('../app.js');
var request       = require('supertest')(app);
var chai          = require('chai');

describe('apiController', function () {
  describe('displayAll', function () {
    it('Should return all entries currently in the database', function () {
      request
        .get('/getAll')
        .expect('Content-Type', 'text/html')
        .expect(200, done);
    });
  });
});
