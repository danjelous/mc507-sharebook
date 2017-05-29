import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksOverviewProvider } from '../../providers/books-overview/books-overview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  booksOverview : any

  constructor(public navCtrl: NavController, private booksOverviewProvider: BooksOverviewProvider) {
      this.booksOverviewProvider.getBooksOverview().then(data => {
        console.log(data);
        this.booksOverview = data;
      });
  }

}
