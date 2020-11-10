import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message.component';
import {IconModule} from '../';

@NgModule({
  declarations: [MessageComponent],
  exports: [MessageComponent],
  imports: [
    CommonModule,
    IconModule,
  ]
})
export class MessageModule {
}

export * from './message.component';
