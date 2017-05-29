import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
   customApiUrl: string;
   googleBooksApiUrl: string;
   googleBooksApiKey: string;
}

export const AppConfig: IAppConfig = {
   customApiUrl: 'http://localhost:7000/v1/',
   googleBooksApiUrl: 'https://www.googleapis.com/books/v1/volumes',
   googleBooksApiKey: 'AIzaSyAFSU7He_M_dkwy-exLXrbdhTLffTO5_YQ'
};
