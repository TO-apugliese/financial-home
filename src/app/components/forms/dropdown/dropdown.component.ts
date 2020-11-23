import { keyframes } from '@angular/animations';
import {Component, Input} from '@angular/core';
import {FormComponent} from '../form.component';

export class DropdownItem {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent extends FormComponent {
  @Input() items: DropdownItem;

  constructor() {
    super();
  }
}
