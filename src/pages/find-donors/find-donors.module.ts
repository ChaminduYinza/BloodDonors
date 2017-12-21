import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindDonorsPage } from './find-donors';

@NgModule({
  declarations: [
    FindDonorsPage,
  ],
  imports: [
    IonicPageModule.forChild(FindDonorsPage),
  ],
})
export class FindDonorsPageModule {}
