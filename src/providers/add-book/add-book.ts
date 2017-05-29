import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the AddBookProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AddBookProvider {

  baseUrl: string;

   constructor( @Inject(APP_CONFIG) private config: IAppConfig, public http: Http) {
      this.baseUrl = config.customApiUrl;
   }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
   }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
   public addBook(book): Promise<Object> {
     
      return this.http.post(this.baseUrl + "v1/book", JSON.stringify(book), {headers: this.getHeaders()})
         .toPromise()
         .then(response => response.json().items)
         .catch(this.handleError);
   }
}
