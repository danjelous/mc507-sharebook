import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksOverviewProvider } from '../../providers/books-overview/books-overview';
import { GenreOverviewPage } from "../../pages/genre-overview/genre-overview";
import { BookDetailsPage } from '../../pages/book-details/book-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  booksOverview : any

  constructor(public navCtrl: NavController, private booksOverviewProvider: BooksOverviewProvider) {
      this.booksOverviewProvider.getBooksOverview().then(data => {
        this.booksOverview = data;
      });
  }

  goToGenreOverview(genre) {
    this.navCtrl.push(GenreOverviewPage, genre);
  }

   goToDetailsPage(book) {
    this.navCtrl.push(BookDetailsPage, book);
  }
}
