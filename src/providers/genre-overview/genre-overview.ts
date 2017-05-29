
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONFIG, IAppConfig } from '../../app/app.config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the GenreOverviewProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GenreOverviewProvider {

   baseUrl: string;

  constructor( @Inject(APP_CONFIG) private config: IAppConfig, public http: Http) {
      this.baseUrl = config.customApiUrl;
   }

   private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
   }

   public getGenreOverview(genre): Promise<Object> {
      return this.http.get(this.baseUrl + "books/" + genre)
         .toPromise()
         .then(response => response.json())
         .catch(this.handleError);
   }

}



