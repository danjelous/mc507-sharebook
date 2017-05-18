import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  bookData : JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bookData = navParams.data;
    console.log(this.bookData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookconfirmationPage');
  }

}
