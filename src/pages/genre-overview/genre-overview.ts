import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenreOverviewProvider } from '../../providers/genre-overview/genre-overview';
import { BookDetailsPage } from '../../pages/book-details/book-details';

/**
 * Generated class for the GenreOverviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-genre-overview',
  templateUrl: 'genre-overview.html',
})
export class GenreOverviewPage {
  genreOverview : any
  genre: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private genreOverviewProvider : GenreOverviewProvider) {
    this.genre = navParams.data;
    console.log(this.genre);
    this.genreOverviewProvider.getGenreOverview(this.genre).then(data => {
        console.log(data);
        this.genreOverview = data;
        console.log(this.genreOverview.books);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenreOverviewPage');
  }

  goToDetailsPage(book) {
    this.navCtrl.push(BookDetailsPage, book);
  }

}
