import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddbookconfirmationPage } from './addbookconfirmation';

@NgModule({
  declarations: [
    AddbookconfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddbookconfirmationPage),
  ],
  exports: [
    AddbookconfirmationPage
  ]
})
export class AddbookconfirmationPageModule {}
