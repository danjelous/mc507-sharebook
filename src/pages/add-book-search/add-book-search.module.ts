import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBookSearchPage } from './add-book-search';

@NgModule({
  declarations: [
    AddBookSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBookSearchPage),
  ],
  exports: [
    AddBookSearchPage
  ]
})
export class AddBookSearchPageModule {}
