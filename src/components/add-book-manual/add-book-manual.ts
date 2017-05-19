import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddBookManualComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
   selector: 'add-book-manual',
   templateUrl: 'add-book-manual.html'
})

export class AddBookManualComponent {

   private addBookManualForm: FormGroup;

   constructor(private formBuilder: FormBuilder) {

      this.addBookManualForm = this.formBuilder.group({
         isbn: ['',
            Validators.compose([
               Validators.required,
               Validators.minLength(10)
            ])
         ],
         title: ['',
            Validators.required,
         ],
         author: ['',
            Validators.required,
         ],
         image: ['',
            Validators.required,
         ],
         genre: [''],
         description: ['']
      });
   }

   addBook($event) {
      console.log($event);
   }

}
