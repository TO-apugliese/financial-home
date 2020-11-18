import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../../icon/icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
  ]
})
export class DropdownModule {
}

export * from './dropdown.component';
