import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  showContent = false;
  @Input()
  position = FlyoutPosition.RIGHT;

  @Input()
  confirmKey: string;

  @Input()
  cancelKey: string;

  @Output()
  confirm = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  get cssClasses(): string {
    const closedClass = !this.show ? ` flyout__window--closed-${this.position}` : '';

    return `flyout__window--${this.position}${closedClass}`;
  }

  close(): void {
    this.show = false;
  }

  open(): void {
    this.show = true;
    this.showContent = false;
    this.showContent = true;
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
    this.close();
  }
}
