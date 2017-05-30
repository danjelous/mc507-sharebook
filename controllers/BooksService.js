'use strict';

exports.booksGET = function (args, res, next) {
  /**
   * parameters expected in the args:
  **/
  var examples = {};
  examples['application/json'] = [
    {
      "title": "Thrillers",
      "books": [
        {
          "id": 1,
          "title": "Todesmärchen 1",
          "author": "Andreas Gruber",
          "genre": "Thriller",
          "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
          "miniature": "https://placehold.it/128x128",
          "image": "https://placehold.it/640x640"
        },
        {
          "id": 2,
          "title": "Todesmärchen 2",
          "author": "Andreas Gruber",
          "genre": "Thriller",
          "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
          "miniature": "https://placehold.it/128x128",
          "image": "https://placehold.it/640x640"
        },
        {
          "id": 3,
          "title": "Todesmärchen 3",
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
          "id": 4,
          "title": "Todesmärchen 4",
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
          "id": 5,
          "title": "Todesmärchen 5",
          "author": "Andreas Gruber",
          "genre": "Thriller",
          "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
          "miniature": "https://placehold.it/128x128",
          "image": "https://placehold.it/640x640"
        }
      ]
    }
  ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.booksGenreGET = function (args, res, next) {
  /**
   * parameters expected in the args:
  * genre (String)
  **/
  var examples = {};
  examples['application/json'] = {
    "books": [{
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 1",
      "id": 1
    },
    {
      "id": 2,
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 2"
    },
    {
      "id": 3,
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 3"
    },
    {
      "id": 4,
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 4"
    }, {
      "id": 5,
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 5"
    }, {
      "id": 6,
      "image": "https://placehold.it/640x640",
      "author": "Andreas Gruber",
      "genre": "Thriller",
      "miniature": "https://placehold.it/128x128",
      "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
      "title": "Todesmärchen 6"
    }],
    "title": "Thrillers"
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

