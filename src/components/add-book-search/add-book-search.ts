import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookDataServiceProvider } from '../../providers/book-data-service/book-data-service';

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

   constructor(private formBuilder: FormBuilder, private bookDataService: BookDataServiceProvider) {
      this.searchForm = this.formBuilder.group({
         isbn: [Validators.required, Validators.minLength(10)]
      });

      this.bookDataService = bookDataService;
      console.log(bookDataService);
   }

   sendForm($event: MouseEvent) {

      $event.preventDefault();
      console.log("API goes here");
   }
}
