angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('login', {
        url: '/page5',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('signup', {
        url: '/page6',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })

      .state('menu.browse', {
        url: '/browse',
        views: {
          'side-menu21': {
            templateUrl: 'templates/browse.html',
            controller: 'browseCtrl'
          }
        }
      })

      .state('menu.genreOverview', {
        url: '/page8',
        views: {
          'side-menu21': {
            templateUrl: 'templates/genreOverview.html',
            controller: 'genreOverviewCtrl'
          }
        }
      })

      .state('menu.bookDetails', {
        url: '/page9',
        views: {
          'side-menu21': {
            templateUrl: 'templates/bookDetails.html',
            controller: 'bookDetailsCtrl'
          }
        }
      })

      .state('menu.profile', {
        url: '/page10',
        views: {
          'side-menu21': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          }
        }
      })

      .state('menu.tradeOverview', {
        url: '/page11',
        views: {
          'side-menu21': {
            templateUrl: 'templates/tradeOverview.html',
            controller: 'tradeOverviewCtrl'
          }
        }
      })

      .state('menu.editProfile', {
        url: '/page12',
        views: {
          'side-menu21': {
            templateUrl: 'templates/editProfile.html',
            controller: 'editProfileCtrl'
          }
        }
      })

      .state('menu.tradeRequest', {
        url: '/page13',
        views: {
          'side-menu21': {
            templateUrl: 'templates/tradeRequest.html',
            controller: 'tradeRequestCtrl'
          }
        }
      })

      .state('menu.myCollection', {
        url: '/page14',
        views: {
          'side-menu21': {
            templateUrl: 'templates/myCollection.html',
            controller: 'myCollectionCtrl'
          }
        }
      })

      .state('menu.addBook', {
        url: '/addbook-search',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addBook.html',
            controller: 'addBookCtrl'
          }
        }
      })

      .state('menu.addBook2', {
        url: '/addbook-barcode',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addBook2.html',
            controller: 'addBook2Ctrl'
          }
        }
      })

      .state('menu.addBook3', {
        url: '/addbook-manual',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addBook3.html',
            controller: 'addBook3Ctrl'
          }
        }
      })

      .state('menu.addBook4', {
        url: '/addbook_final',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addBook4.html',
            controller: 'addBook4Ctrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/side-menu21/browse')



  });
