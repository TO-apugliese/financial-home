import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective implements OnInit {
  @Input('appGrid') value: string

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('grid');
  }
}
