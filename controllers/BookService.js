'use strict';

exports.bookIdGET = function (args, res, next) {
  /**
   * parameters expected in the args:
  * id (Integer)
  **/
  var examples = {};
  examples['application/json'] = {
    "image": "https://placehold.it/640x640",
    "author": "Andreas Gruber",
    "genre": "Thriller",
    "miniature": "https://placehold.it/128x128",
    "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title": "Todesmärchen " + args.id.value,
    "id": args.id.value
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.bookPOST = function (args, res, next) {
  /**
   * parameters expected in the args:
  * book (Book)
  **/
  // no response value expected for this operation
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(args.book.value, null, 2));
}

