import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlyoutComponent} from './flyout.component';
import {IconModule} from '../icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/directives';

@NgModule({
  declarations: [FlyoutComponent],
  exports: [FlyoutComponent],
  imports: [
    CommonModule,
    IconModule,
    TranslateModule,
    ButtonModule,
  ]
})
export class FlyoutModule {
}

export * from './flyout.component';
