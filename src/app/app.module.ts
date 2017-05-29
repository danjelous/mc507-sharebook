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
import { AddBookPage } from '../pages/add-book/add-book';
import { EditprofilePage } from "../pages/editprofile/editprofile";
import { ProfilePage } from '../pages/profile/profile';
import { GenreOverviewPage } from '../pages/genre-overview/genre-overview';

// Provider
import { BookDataServiceProvider } from '../providers/book-data.service/book-data.service';
import { AddBookProvider } from '../providers/add-book/add-book';
import { BooksOverviewProvider } from '../providers/books-overview/books-overview';

// Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CollectionPage } from "../pages/collection/collection";
import { TradesPage } from "../pages/trades/trades";
import { AddbookconfirmationPage } from "../pages/addbookconfirmation/addbookconfirmation";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { AddBookManualComponent } from '../components/add-book-manual/add-book-manual';
import { GenreOverviewProvider } from '../providers/genre-overview/genre-overview';

@NgModule({
   declarations: [
      MyApp,
      HomePage,
      CollectionPage,
      TradesPage,
      EditprofilePage,
      ProfilePage,
      GenreOverviewPage,
      AddbookconfirmationPage,
      AddBookPage,
      AddBookSearchComponent,
      AddBookBarcodeComponent,
      AddBookManualComponent
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
      CollectionPage,
      TradesPage,
      GenreOverviewPage,
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
      AddBookProvider,
      BarcodeScanner,
    BooksOverviewProvider,
    GenreOverviewProvider
   ]
})
export class AppModule { }
