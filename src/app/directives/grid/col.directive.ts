import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCol]'
})
export class ColDirective implements OnInit {
  screenSizes = ['s', 'm', 'l', 'xl'];
  @Input('appCol') appCol: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const colSizes = !!this.appCol ? this.appCol.split(',') : [];
    this.el.nativeElement.classList.add('col');

    colSizes.forEach((size: string, index: number) => {
      this.el.nativeElement.classList.add(`${this.screenSizes[index]}${size}`);
    });
  }
}
