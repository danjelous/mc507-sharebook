import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenreOverviewPage } from './genre-overview';

@NgModule({
  declarations: [
    GenreOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(GenreOverviewPage),
  ],
  exports: [
    GenreOverviewPage
  ]
})
export class GenreOverviewPageModule {}
