import {Component, Input} from '@angular/core';
import {FormComponent} from '../form.component';

export class DropdownItem {
  key: string;
  value: string;
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
