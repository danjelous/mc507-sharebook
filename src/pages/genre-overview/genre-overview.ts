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
   genreOverview: any
   genre: any
   saySorry: Boolean = true; // Canadian style

   constructor(public navCtrl: NavController, public navParams: NavParams, private genreOverviewProvider: GenreOverviewProvider) {

      this.genre = navParams.data;

      this.genreOverviewProvider.getGenreOverview(this.genre).then(data => {

         if (data['books']) {
            this.saySorry = false;
            this.genreOverview = data['books'];
         }
      });
   }

   goToDetailsPage(book) {
      this.navCtrl.push(BookDetailsPage, book);
   }
}
