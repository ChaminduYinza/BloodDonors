import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
mobile:any;
password:any;
userArray:any = JSON.parse(localStorage.getItem('userArray'));
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

register(){
  this.navCtrl.setRoot(RegisterPage);
}

showAlert(message,type) {
    let alert = this.alertCtrl.create({
      title: type,
      subTitle:message,
      buttons: ['OK']
    });
    alert.present();
  }


  login(){

    if(this.mobile != undefined && this.password != undefined && this.mobile == this.userArray.contact && this.password == this.userArray.password){
      this.navCtrl.setRoot(HomePage);
      console.log(this.userArray);
    }else{
      this.showAlert('Invalid login details','Oops!');
    }
  }

  splash = true;


  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
