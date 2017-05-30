import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookDetailsProvider } from '../../providers/book-details/book-details';

/**
 * Generated class for the BookDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
      console.log(this.bookId);

      this.bookDetailsProvider.getBookDetails(this.bookId).then(data => {
         console.log(data);
         this.bookData = data;
      });
   }

   ionViewDidLoad() {
      console.log('ionViewDidLoad BookDetailsPage');
   }

}
