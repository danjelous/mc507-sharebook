import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBookPage } from './add-book';

@NgModule({
  declarations: [
    AddBookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBookPage),
  ],
  exports: [
    AddBookPage
  ]
})
export class AddBookPageModule {}
