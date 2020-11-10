import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {IconModule} from '../..';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    IconModule,
    CommonModule,
    FormsModule
  ]
})
export class InputModule {
}

export * from './input.component';
