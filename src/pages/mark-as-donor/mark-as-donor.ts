import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MarkAsDonorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark-as-donor',
  templateUrl: 'mark-as-donor.html',
})
export class MarkAsDonorPage {
  userArray:any = JSON.parse(localStorage.getItem('userArray'));

bGroup:any;
user:any = {};

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
     this.bGroup=this.getBloodGroup(this.userArray.bloodgroup);
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

    markAsDonor(){
    this.showAlert('Successfully Marked','Success!');
    this.navCtrl.setRoot(HomePage);
  }

  route(){
    this.navCtrl.setRoot(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkAsDonorPage');
  }

}
