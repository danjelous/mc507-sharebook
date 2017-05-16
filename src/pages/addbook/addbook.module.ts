import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddbookPage } from './addbook';

@NgModule({
  declarations: [
    AddbookPage,
  ],
  imports: [
    IonicPageModule.forChild(AddbookPage),
  ],
  exports: [
    AddbookPage
  ]
})
export class AddbookPageModule {}
