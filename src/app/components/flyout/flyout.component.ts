import {Component, Input} from '@angular/core';

export enum FlyoutPosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

@Component({
  selector: 'app-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent {
  show = false;
  @Input() position = FlyoutPosition.RIGHT;

  get cssClasses(): string {
    const closedClass = !this.show ? ` flyout--closed-${this.position}` : '';

    return `flyout--${this.position}${closedClass}`;
  }

  close(): void {
    this.show = false;
  }

  open(): void {
    this.show = true;
  }
}
