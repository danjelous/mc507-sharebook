'use strict';

var url = require('url');


var Books = require('./BooksService');


module.exports.booksGET = function booksGET (req, res, next) {
  Books.booksGET(req.swagger.params, res, next);
};

module.exports.booksGenreGET = function booksGenreGET (req, res, next) {
  Books.booksGenreGET(req.swagger.params, res, next);
};
