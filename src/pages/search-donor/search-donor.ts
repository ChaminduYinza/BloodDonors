import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {HomePage} from '../home/home';

import {FindDonorsPage} from '../find-donors/find-donors';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the finddonorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search-donor.html',
})
export class SearchDonorPage {

  constructor(public navCtrl: NavController) {

  }

user:any = {};

find(){
   this.navCtrl.push(FindDonorsPage);
}


}
