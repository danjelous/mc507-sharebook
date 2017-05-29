import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBookProvider } from '../../providers/add-book/add-book';

/**
 * Generated class for the AddbookconfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addbookconfirmation',
  templateUrl: 'addbookconfirmation.html',
})
export class AddbookconfirmationPage {

  bookData : any;

  constructor(private addBookProvider: AddBookProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.bookData = navParams.data;
    console.log(this.bookData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookconfirmationPage');
  }

   onSubmit(formData) {


    formData.miniature = this.bookData.imageLinks.thumbnail || "";
    formData.image = this.bookData.imageLinks.large || "";
    console.log('Form submission is ', formData);
    this.addBookProvider.addBook(formData).then(data => {
        console.log(data);
      });

  }
}
