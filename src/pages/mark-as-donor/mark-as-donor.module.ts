import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkAsDonorPage } from './mark-as-donor';

@NgModule({
  declarations: [
    MarkAsDonorPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkAsDonorPage),
  ],
})
export class MarkAsDonorPageModule {}
