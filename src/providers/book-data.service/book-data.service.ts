import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BookDataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookDataServiceProvider {

  constructor(public http: Http) {
    this.http = http;
  }


  service.baseUrl = CONFIG.googleBooksApiUrl;

  getBookByIsbn = (isbn) => {
    return this.http.get(service.baseUrl + `?q=isbn:${isbn}`);
  }

}
