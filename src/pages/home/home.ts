import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { BooksOverviewProvider } from '../../providers/books-overview/books-overview';
import { GenreOverviewPage } from "../../pages/genre-overview/genre-overview";
import { BookDetailsPage } from '../../pages/book-details/book-details';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {

   booksOverview: any;
   addedBook: string;

   constructor(public navCtrl: NavController, public navParams: NavParams,
   private booksOverviewProvider: BooksOverviewProvider, private viewCtrl: ViewController) {

      // Book added?
      if (navParams.data.length > 1)
         this.addedBook = navParams.data;

      this.booksOverviewProvider.getBooksOverview().then(data => {
         this.booksOverview = data;
      });
   }

   ionViewWillEnter() {
      this.viewCtrl.showBackButton(false);
      this.navCtrl.setRoot(this.viewCtrl);
   }

   goToGenreOverview(genre) {
      this.navCtrl.push(GenreOverviewPage, genre);
   }

   goToDetailsPage(book) {
      this.navCtrl.push(BookDetailsPage, book);
   }
}
