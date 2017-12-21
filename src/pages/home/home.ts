import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarkAsDonorPage } from '../mark-as-donor/mark-as-donor';
import { BloodBanksPage } from '../blood-banks/blood-banks';
import { FindDonorsPage } from '../find-donors/find-donors';
import { RequestBloodPage } from '../request-blood/request-blood';
import { BloodcompatabilityPage } from '../bloodcompatability/bloodcompatability';
import { SettingsPage } from '../settings/settings'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  redirect(pageName) {

    switch (pageName) {
      case "Request blood":
        this.navCtrl.push(RequestBloodPage);
        break;
      case "Mark as donor":
        this.navCtrl.push(MarkAsDonorPage);
        break;
        case "Find donors":
        this.navCtrl.push(FindDonorsPage);
        break;
        case "Blood bank data":
        this.navCtrl.push(BloodBanksPage);
        break;
        case "Settings":
        this.navCtrl.push(SettingsPage);
        break;
        case "Blood compatability":
        this.navCtrl.push(BloodcompatabilityPage);
        break;




    }



  }

}
