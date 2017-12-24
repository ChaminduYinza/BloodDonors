import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import {ChangePasswordPage } from '../pages/change-password/change-password';
import { MarkAsDonorPage } from '../pages/mark-as-donor/mark-as-donor';
import { BloodBanksPage } from '../pages/blood-banks/blood-banks';
import { RequestBloodPage } from '../pages/request-blood/request-blood';
import { FindDonorsPage } from '../pages/find-donors/find-donors';
import { SearchDonorPage } from '../pages/search-donor/search-donor';
import { BloodcompatabilityPage } from '../pages/bloodcompatability/bloodcompatability';
import { SettingsPage } from '../pages/settings/settings';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    EditProfilePage,
    ChangePasswordPage,
    MarkAsDonorPage,
    BloodBanksPage,
    FindDonorsPage,
    RequestBloodPage,
    BloodcompatabilityPage,
     SearchDonorPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    EditProfilePage,
    ChangePasswordPage,
    MarkAsDonorPage,
    BloodBanksPage,
    FindDonorsPage,
    RequestBloodPage,
    BloodcompatabilityPage,
   SearchDonorPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
