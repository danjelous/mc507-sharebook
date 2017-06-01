import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookDetailsProvider } from '../../providers/book-details/book-details';

@IonicPage()
@Component({
   selector: 'page-book-details',
   templateUrl: 'book-details.html',
})
export class BookDetailsPage {

   bookId: any
   bookData: any

   constructor(public navCtrl: NavController, public navParams: NavParams, private bookDetailsProvider: BookDetailsProvider) {
      this.bookId = navParams.data;

      this.bookDetailsProvider.getBookDetails(this.bookId).then(data => {
         this.bookData = data;
      });
   }
}
