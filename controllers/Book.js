'use strict';

var url = require('url');


var Book = require('./BookService');


module.exports.bookIdGET = function bookIdGET (req, res, next) {
  Book.bookIdGET(req.swagger.params, res, next);
};

module.exports.bookPOST = function bookPOST (req, res, next) {
  Book.bookPOST(req.swagger.params, res, next);
};
