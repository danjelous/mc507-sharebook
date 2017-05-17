import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
   selector: 'page-add-book',
   templateUrl: 'add-book.html',
})
export class AddBookPage {

   // Default value of segments
   addBookBy = 'search';

   constructor(public navCtrl: NavController, public navParams: NavParams) {

   }

   searchByISBN() {
      console.log("Here comes the service");
   }
}
