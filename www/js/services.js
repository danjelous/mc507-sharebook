angular.module('app.services', [])

.factory('BookDataService', ['$http', 'CONFIG', function($http, CONFIG){

  let service = {};
  service.baseUrl = CONFIG.googleBooksApiUrl;

  service.getBookByIsbn = (isbn) => {
    return $http.get(service.baseUrl + `?q=isbn:${isbn}`);
  }

  // Explicit expose functions
  return {
    getBookByIsbn : (isbn) => {
      return service.getBookByIsbn(isbn);
    }
  }

}])

.service('BlankService', [function(){

}]);
