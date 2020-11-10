import {Component, Input} from '@angular/core';
import {FormComponent} from '../form.component';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent extends FormComponent {
  @Input() icon: string;
  @Input() type = InputType.TEXT;
  showPassword = false;

  constructor() {
    super();
  }
}
