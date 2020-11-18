import { v4 as uuid } from 'uuid';
import {Component, Input} from '@angular/core';

@Component({
  template: ``,
})
export abstract class FormComponent<T = any> {
  id: string = uuid();

  @Input() label: string | undefined | null;
  @Input() placeholder: string | undefined | null;
  @Input() ref: any;
  @Input() field: string;

  get value(): any {
    if (!this.ref) {
      return;
    }
    if (!this.field) {
      return;
    }

    return this.ref[this.field];
  }

  set value(value: any) {
    if (!this.ref) {
      return;
    }
    if (!this.field) {
      return;
    }

    this.ref[this.field] = value;
  }
}
