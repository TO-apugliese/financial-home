import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlyoutComponent} from './flyout.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [FlyoutComponent],
  exports: [FlyoutComponent],
  imports: [
    CommonModule,
    IconModule,
  ]
})
export class FlyoutModule {
}

export * from './flyout.component';
