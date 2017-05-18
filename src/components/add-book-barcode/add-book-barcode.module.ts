import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBookBarcodeComponent } from './add-book-barcode';

@NgModule({
  declarations: [
    AddBookBarcodeComponent,
  ],
  imports: [
    IonicPageModule.forChild(AddBookBarcodeComponent),
  ],
  exports: [
    AddBookBarcodeComponent
  ]
})
export class AddBookBarcodeComponentModule {}
