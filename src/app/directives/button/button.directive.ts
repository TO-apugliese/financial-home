import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'button[appButton]'
})
export class ButtonDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('waves-effect');
    el.nativeElement.classList.add('waves-light');
    el.nativeElement.classList.add('btn');
  }
}
