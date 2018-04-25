import { Directive , ElementRef, Input, ViewChild, ContentChild} from '@angular/core';
import * as MathLive from 'mathlive';
declare var MathLive;

@Directive({
  selector: '[mathfield]' // Attribute selector
})
export class MathliveDirective {
  @ViewChild('mathfield') MathLiveInput: ElementRef;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {

    MathLive.makeMathField( this.MathLiveInput.nativeElement);
}
}
