import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestBloodPage } from './request-blood';

@NgModule({
  declarations: [
    RequestBloodPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestBloodPage),
  ],
})
export class RequestBloodPageModule {}
