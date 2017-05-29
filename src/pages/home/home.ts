import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksOverviewProvider } from '../../providers/books-overview/books-overview';
import { GenreOverviewPage } from "../../pages/genre-overview/genre-overview";

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

  goToGenreOverview(genre) {
    this.navCtrl.push(GenreOverviewPage, genre);
  }
}
