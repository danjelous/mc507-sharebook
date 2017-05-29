'use strict';

exports.booksGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [
  {
    "title": "Thrillers",
    "books": [
      {
        "title": "Todesmärchen",
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "miniature": "https://placehold.it/128x128",
        "image": "https://placehold.it/640x640"
      },
         {
        "title": "Todesmärchen",
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "miniature": "https://placehold.it/128x128",
        "image": "https://placehold.it/640x640"
      },   
      {
        "title": "Todesmärchen",
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "miniature": "https://placehold.it/128x128",
        "image": "https://placehold.it/640x640"
      }
    ]
  },
   {
    "title": "Novels",
    "books": [
      {
        "title": "Todesmärchen",
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "miniature": "https://placehold.it/128x128",
        "image": "https://placehold.it/640x640"
      }
    ]
  },
   {
    "title": "Biographies",
    "books": [
      {
        "title": "Todesmärchen",
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "miniature": "https://placehold.it/128x128",
        "image": "https://placehold.it/640x640"
      }
    ]
  }
];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.booksGenreGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * genre (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "books" : [ {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  },
  {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  } ,
  {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  } ,
  {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  }, {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  }, {
    "image" : "https://placehold.it/640x640",
    "author" : "Andreas Gruber",
    "genre" : "Thriller",
    "miniature" : "https://placehold.it/128x128",
    "description" : "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
    "title" : "Todesmärchen"
  }  ],
  "title" : "Thrillers"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

