import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FindDonorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-donors',
  templateUrl: 'find-donors.html',
})
export class FindDonorsPage {
  userJSON:any = [
  {
    Name:"Randy Rushan",
    Location:"Kandy"
  },
  {
    Name:"Amila Sadaruwan",
    Location:"Kandy"
  },
  {
    Name:"Shiran Nirmana",
    Location:"Colombo"
  },
  {
    Name:"Sameera Madushan",
    Location:"Malabe"
  },

  {
    Name:"Chamindu Thiranjaya",
    Location:"Piliyandala"
  },

  {
    Name:"Edward Jayakodi",
    Location:"Anuradhapura"
  }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindDonorsPage');
  }

}
