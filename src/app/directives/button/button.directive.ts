import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'button[appButton]'
})
export class ButtonDirective implements OnChanges {
  @Input()
  floating = false;

  @Input()
  color: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.update(changes);
  }

  update(changes?: SimpleChanges): void {
    if (!!changes.floating) {
      if (!!changes.floating.currentValue) {
        this.el.nativeElement.classList.add('btn-floating');
      } else {
        this.el.nativeElement.classList.remove('btn-floating');
      }
    }
    if (!!changes.color) {
      if (changes.color.previousValue) {
        this.el.nativeElement.classList.remove(changes.color.previousValue);
      }
      this.el.nativeElement.classList.add(changes.color.currentValue);
    }

    this.el.nativeElement.classList.add('waves-effect');
    this.el.nativeElement.classList.add('waves-light');
    this.el.nativeElement.classList.add('btn');
  }
}
