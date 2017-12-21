import {
    Component
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams
} from 'ionic-angular';
import {
    AlertController
} from 'ionic-angular';
import {
    HomePage
} from '../home/home'

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
    user: any = {};
    userList: any = {};
    passwordList: any = JSON.parse(localStorage.getItem('userArray'));

    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {}

    showAlert(message, type) {
        let alert = this.alertCtrl.create({
            title: type,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
    updatePassword() {
console.log('Current typed pw : '+this.user.currentPassword+'Actual password'+this.passwordList.password)
        if (this.user.password1 != this.user.password2) {
            this.showAlert('Password not match', 'Oops!');
        } else if (this.user.currentPassword == this.passwordList.password) {
            this.passwordList.password = this.user.password1;
            localStorage.setItem('userArray', JSON.stringify(this.passwordList));
            this.showAlert('Successfully updated', 'Success!');
            window.location.reload;
            this.navCtrl.setRoot(HomePage);
        } else {

            this.showAlert('Incorrect current password', 'Oops!');
        }
    };

      route(){
    this.navCtrl.setRoot(HomePage);
  }
  

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangePasswordPage');
    }

}