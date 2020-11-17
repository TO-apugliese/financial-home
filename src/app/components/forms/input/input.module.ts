import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {IconModule} from '../../icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
  ]
})
export class InputModule {
}

export * from './input.component';
