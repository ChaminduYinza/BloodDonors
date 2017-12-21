import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user:any = {};
userList:any={};

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
  register(){
if(this.user.password != this.user.password2){
this.showAlert('Password not match','Oops!');
}else{
 localStorage.setItem('userArray',JSON.stringify(this.user));
 this.showAlert('Successfully registered','Success!');
 window.location.reload;
 this.navCtrl.setRoot(LoginPage);
}
  };



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
