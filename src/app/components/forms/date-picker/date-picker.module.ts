import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../../icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent],
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
  ]
})
export class DatePickerModule {
}

export * from './date-picker.component';
