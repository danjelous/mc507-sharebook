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
          "miniature": "https://lorempixel.com/128/128/business",
          "image": "https://lorempixel.com/640/640/business"
        },
        {
          "id": 2,
          "title": "Todesmärchen 2",
          "author": "Andreas Gruber",
          "genre": "Thriller",
          "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
          "miniature": "https://lorempixel.com/128/128/city",
          "image": "https://lorempixel.com/640/640/city"
        },
        {
          "id": 3,
          "title": "Todesmärchen 3",
          "author": "Andreas Gruber",
          "genre": "Thriller",
          "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
          "miniature": "https://lorempixel.com/128/128/sports",
          "image": "https://lorempixel.com/640/640/sports"
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
          "miniature": "https://lorempixel.com/128/128/food",
          "image": "https://lorempixel.com/640/640/food"
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
          "miniature": "https://lorempixel.com/128/128/transport",
          "image": "https://lorempixel.com/640/640/transport"
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

  if (args.genre.value == 'Thrillers') {

    examples['application/json'] = {
      "books": [{
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 1",
        "id": 1,
        "miniature": "https://lorempixel.com/128/128/city",
        "image": "https://lorempixel.com/640/640/city"
      },
      {
        "id": 2,
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 2",
        "miniature": "https://lorempixel.com/128/128/abstract",
        "image": "https://lorempixel.com/640/640/abstract"
      },
      {
        "id": 3,
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 3",
        "miniature": "https://lorempixel.com/128/128/food",
        "image": "https://lorempixel.com/640/640/food"
      },
      {
        "id": 4,
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 4",
        "miniature": "https://lorempixel.com/128/128/nature",
        "image": "https://lorempixel.com/640/640/nature"
      }, {
        "id": 5,
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 5",
        "miniature": "https://lorempixel.com/128/128/people",
        "image": "https://lorempixel.com/640/640/people"
      }, {
        "id": 6,
        "author": "Andreas Gruber",
        "genre": "Thriller",
        "description": "In Bern wird die kunstvoll drapierte Leiche einer Frau gefunden, in deren Haut der Mörder ein geheimnisvolles Zeichen geritzt hat. Sie bleibt nicht sein einziges Opfer...",
        "title": "Todesmärchen 6",
        "miniature": "https://lorempixel.com/128/128/animals",
        "image": "https://lorempixel.com/640/640/animals"
      }],
      "title": "Thrillers"
    };
  }
  else {
    examples['application/json'] = {

      "res": "Sorry, no books found for genre '" + args.genre.value + "'."
    };
  }
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

