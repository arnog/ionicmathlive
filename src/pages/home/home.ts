import { Component,  ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as MathLive from 'mathlive';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('mathfield') mathfield: ElementRef;

  constructor(public navCtrl: NavController, public el:ElementRef) {
  }

  ionViewDidLoad() {
    MathLive.makeMathField(this.mathfield.nativeElement);
  }

}
