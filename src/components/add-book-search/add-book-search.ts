import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookDataServiceProvider } from '../../providers/book-data.service/book-data.service';
import { NavController } from "ionic-angular";
import { AddbookconfirmationPage } from "../../pages/addbookconfirmation/addbookconfirmation";

/**
 * Generated class for the AddBookSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
   selector: 'add-book-search',
   templateUrl: 'add-book-search.html'
})

export class AddBookSearchComponent {

   // Searchform
   private searchForm: FormGroup;

   constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private bookDataService: BookDataServiceProvider) {
      // Validators.minLength(10)
      this.searchForm = this.formBuilder.group({
         isbn: ['',
            Validators.required
         ]
      });

      this.bookDataService = bookDataService;
   }

   sendForm($event: MouseEvent) {

      $event.preventDefault();
      this.bookDataService.getBookByIsbn(this.searchForm.controls.isbn.value).then(data => {
        console.log(data);
        this.navCtrl.push(AddbookconfirmationPage, data[0]);
      });
   }
}
