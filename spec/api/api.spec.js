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
  describe('displayByRequest', function () {
    it('Should return entries that match a given request type', function () {
      request
        .get('/displayByRequest/get')
        .expect(200, done);
    });
  });
  describe('displayByResponse', function () {
    it('Should return all entries with a given time-stamp', function () {
      request
        .get('/displayByResponse/200')
        .expect(200, done);
    });
  });
  describe('domainPercentage', function () {
    it('Should return the percentage of total for each host domain', function () {
      request
        .get('/domainPercentage/.com')
        .expect(200, done);
    });
  });
});
