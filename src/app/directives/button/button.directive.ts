import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'button[appButton]'
})
export class ButtonDirective implements OnInit {
  @Input()
  floating = false;

  @Input()
  color: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.floating) this.el.nativeElement.classList.add('btn-floating');
    if (this.color) this.el.nativeElement.classList.add(this.color);

    this.el.nativeElement.classList.add('waves-effect');
    this.el.nativeElement.classList.add('waves-light');
    this.el.nativeElement.classList.add('btn');
  }
}
