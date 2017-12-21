import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the BloodBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blood-banks',
  templateUrl: 'blood-banks.html',
})
export class BloodBanksPage {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
 hospitalJSON:any = [
  {
    
    Location:"Kandy"
  },
  {
   
    Location:"Nugegoda"
  },
  {
    
    Location:"Colombo"
  },
  {
   
    Location:"Malabe"
  },

  {
   
    Location:"Piliyandala"
  },

  {
    
    Location:"Anuradhapura"
  }
];


alert() {
    let alert = this.alertCtrl.create({
      title: 'Details',
      subTitle:'Contact : 0114025989',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodBanksPage');
  }

}
