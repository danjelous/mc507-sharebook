import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBookManualComponent } from './add-book-manual';

@NgModule({
  declarations: [
    AddBookManualComponent,
  ],
  imports: [
    IonicPageModule.forChild(AddBookManualComponent),
  ],
  exports: [
    AddBookManualComponent
  ]
})
export class AddBookManualComponentModule {}
