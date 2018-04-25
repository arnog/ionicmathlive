import { Component,  ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public el:ElementRef) {

  }

}
