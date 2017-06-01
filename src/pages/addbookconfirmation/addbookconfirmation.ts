import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBookProvider } from '../../providers/add-book/add-book';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
   selector: 'page-addbookconfirmation',
   templateUrl: 'addbookconfirmation.html',
})
export class AddbookconfirmationPage {

   bookData: any;

   constructor(private addBookProvider: AddBookProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.bookData = navParams.data;
   }

   onSubmit(formData) {

      formData.miniature = this.bookData.imageLinks.thumbnail || "";
      formData.image = this.bookData.imageLinks.large || "";
      console.log('Form submission is ', formData);

      // Send book to server
      this.addBookProvider.addBook(formData).then(data => {

         // Success
         if(data) {
            this.navCtrl.push(HomePage, formData.title);
         }
      });

   }
}
