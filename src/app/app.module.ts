import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Components
import { MyApp } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';
import { AddBookSearchComponent } from '../components/add-book-search/add-book-search';
import { AddBookBarcodeComponent } from '../components/add-book-barcode/add-book-barcode';

// Pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddBookPage } from '../pages/add-book/add-book';
import { EditprofilePage } from "../pages/editprofile/editprofile";
import { ProfilePage } from '../pages/profile/profile';

// Provider
import { BookDataServiceProvider } from '../providers/book-data.service/book-data.service';

// Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CollectionPage } from "../pages/collection/collection";
import { TradesPage } from "../pages/trades/trades";
import { AddbookconfirmationPage } from "../pages/addbookconfirmation/addbookconfirmation";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@NgModule({
   declarations: [
      MyApp,
      HomePage,
      ListPage,
      CollectionPage,
      TradesPage,
      EditprofilePage,
      ProfilePage,
      AddbookconfirmationPage,
      AddBookPage,
      AddBookSearchComponent,
    AddBookBarcodeComponent
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      HttpModule,
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      HomePage,
      ListPage,
      CollectionPage,
      TradesPage,
      EditprofilePage,
      ProfilePage,
      AddbookconfirmationPage,
      AddBookPage
   ],
   providers: [
      StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler },
      { provide: APP_CONFIG, useValue: AppConfig },
      BookDataServiceProvider,
      BarcodeScanner
   ]
})
export class AppModule { }
