import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
userArray:any = JSON.parse(localStorage.getItem('userArray'));

bGroup:any;
user:any = {};
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.bGroup=this.getBloodGroup(this.userArray.bloodgroup);
  }

  ionViewDidLoad() {
  
  }

  showAlert(message,type) {
    let alert = this.alertCtrl.create({
      title: type,
      subTitle:message,
      buttons: ['OK']
    });
    alert.present();
  }


  getBloodGroup(value){
    switch(value){
    case "aPositive":
      return "A+";
    case "aNegative":
      return "A-";
    case "bPositive":
      return "B+";
    case "bNegative":
      return "B-";
    case "abPositive":
      return "AB+";
    case "abNegative":
      return "AB-";
    case "oPositive":
      return "O+";
    case "oNegative":
      return "O-";
    }
    
  }

  register(){
    this.user.password = this.userArray.password;
    this.user.bloodgroup = this.userArray.bloodgroup;
    localStorage.setItem('userArray',JSON.stringify(this.user));
    window.location.reload;
     this.bGroup=this.getBloodGroup(this.userArray.bloodgroup);
 this.showAlert('Successfully edited','Success!');
  }

  route(){
    this.navCtrl.setRoot(HomePage);
  }


}
