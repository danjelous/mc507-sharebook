import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBookSearchComponent } from './add-book-search';

@NgModule({
  declarations: [
    AddBookSearchComponent,
  ],
  imports: [
    IonicPageModule.forChild(AddBookSearchComponent),
  ],
  exports: [
    AddBookSearchComponent
  ]
})
export class AddBookSearchComponentModule {}
