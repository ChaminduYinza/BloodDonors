import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarkAsDonorPage } from '../mark-as-donor/mark-as-donor';
import { BloodBanksPage } from '../blood-banks/blood-banks';
import { SearchDonorPage } from '../search-donor/search-donor';
import { RequestBloodPage } from '../request-blood/request-blood';
import { BloodcompatabilityPage } from '../bloodcompatability/bloodcompatability';
import { SettingsPage } from '../settings/settings'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  animations: [
 
    trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)',
        
      })),
      transition('* => flipped', animate('400ms ease'))
    ]),
 
    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),
 
    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('200ms linear'))
    ]),
 
    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ])
 
  ]
})
export class HomePage {

  bounceState: String = 'noBounce';
  flipState: String = 'notFlipped';
  constructor(public navCtrl: NavController) {

  }

  redirect(pageName) {

   
        
 

     

    switch (pageName) {
      case "Request blood":
        this.navCtrl.push(RequestBloodPage);
        break;
      case "Mark as donor":
        this.navCtrl.push(MarkAsDonorPage);
        break;
        case "Search donors":
        this.navCtrl.push(SearchDonorPage);
        break;
        case "Blood bank data":
        this.navCtrl.push(BloodBanksPage);
        break;
        case "Settings":
        this.navCtrl.push(SettingsPage);
        break;
        case "Blood compatability":
        this.navCtrl.push(BloodcompatabilityPage);
        break;




    }
    



  }




}
