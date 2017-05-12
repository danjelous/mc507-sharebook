angular.module('app.controllers', [])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('browseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('genreOverviewCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('bookDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('tradeOverviewCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('editProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('tradeRequestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('myCollectionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('addBookCtrl', ['$scope', '$location', '$stateParams',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $location, $stateParams) {

      $scope.searchBook = (isbn) => {

        // Change view and add search query
        $location.path('/side-menu21/addbook-confirm').search({ query: isbn });
      }
    }])

  .controller('addBook2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('addBook3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('addBookConfirmCtrl', ['$scope', '$stateParams', '$location', 'BookDataService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $location, BookDataService) {

      // Init
      $scope.noBooksFound = false;
      $scope.booksFound = false;

      // Query param
      let searchQuery = $location.search().query;

      BookDataService.getBookByIsbn(searchQuery)
        .error((error) => {
          console.log(error);
        })
        .success((response) => {

          // Check if we got a book
          $scope.booksFound = (response.totalItems > 0);
          $scope.noBooksFound = !$scope.booksFound;

          if ($scope.booksFound) {

            $scope.generatedBookData = {};

            // Reassing needed values (currently assume only one result --> ISBN == unique :)
            $scope.generatedBookData.title = response.items[0].volumeInfo.title;
            $scope.generatedBookData.author = response.items[0].volumeInfo.authors.toString(); // Array to String
            $scope.generatedBookData.thumbnailImage = response.items[0].volumeInfo.imageLinks.thumbnail;
            $scope.generatedBookData.genre = response.items[0].volumeInfo.categories.toString(); // Array to String
            $scope.generatedBookData.description = response.items[0].volumeInfo.description;

            // Strangely I need a separate variable for each placeholder :x (cant use value of model)
            $scope.generatedBookData.placeholders = {};
            $scope.generatedBookData.placeholders.author = $scope.generatedBookData.author;
            $scope.generatedBookData.placeholders.title = $scope.generatedBookData.title;
            $scope.generatedBookData.placeholders.genre = $scope.generatedBookData.genre;
            $scope.generatedBookData.placeholders.description = $scope.generatedBookData.description;
          }

        });

      $scope.saveBook = () => {

        // place future REST call, now localstorage..
        let bookToSave = $scope.generatedBookData;
        delete bookToSave.placeholders;
        let bookToSaveString = JSON.stringify(bookToSave);
        window.localStorage.setItem(`sharebook.${searchQuery}`, bookToSaveString);
      }

    }])
