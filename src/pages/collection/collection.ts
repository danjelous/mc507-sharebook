import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BookDetailsPage } from '../../pages/book-details/book-details';
import { BooksOverviewProvider } from '../../providers/books-overview/books-overview';
import { GenreOverviewPage } from "../../pages/genre-overview/genre-overview";

@IonicPage()
@Component({
   selector: 'page-collection',
   templateUrl: 'collection.html',
})
export class CollectionPage {

   booksOverview: any

   constructor(public navCtrl: NavController, private booksOverviewProvider: BooksOverviewProvider) {
      this.booksOverviewProvider.getBooksOverview().then(data => {

         let arr = [];
         arr.push(data['1']);
         arr.push(data['2']);
         this.booksOverview = arr;
      });
   }

   goToGenreOverview(genre) {
      this.navCtrl.push(GenreOverviewPage, genre);
   }

   goToDetailsPage(book) {
      this.navCtrl.push(BookDetailsPage, book);
   }
}
