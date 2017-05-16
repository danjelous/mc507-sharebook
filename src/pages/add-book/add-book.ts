import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

//    template: `
//     <form [formGroup]="searchForm" (ngSubmit)="searchByISBN()">
//       <ion-item>
//         <ion-label>Search by ISBN</ion-label>
//         <ion-input type="number" formControlName="isbn"></ion-input>
//       </ion-item>
//       <button ion-button type="submit" [disabled]="!searchForm.valid">Search</button>
//     </form>
//   `
})
export class AddBookPage {

   // Default value of segments
   addBookBy = 'search';

   // Searchform
   private searchForm: FormGroup;

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private formBuilder: FormBuilder) {

      // this.searchForm = this.formBuilder.group({
      //    isbn: [ Validators.required]
      // });
   }

   searchByISBN() {
      console.log("Here comes the service");
   }
}
