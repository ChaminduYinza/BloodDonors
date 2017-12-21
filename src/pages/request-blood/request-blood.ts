import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'

/**
 * Generated class for the RequestBloodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-blood',
  templateUrl: 'request-blood.html',
})
export class RequestBloodPage {
  userArray:any = JSON.parse(localStorage.getItem('userArray'));

bGroup:any;
user:any = {};

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
showAlert(message,type) {
    let alert = this.alertCtrl.create({
      title: type,
      subTitle:message,
      buttons: ['OK']
    });
    alert.present();
  }

  requestBlood(){
    this.showAlert('Successfully requested','Success!');
    this.navCtrl.setRoot(HomePage);
  }

  route(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestBloodPage');
  }

}
