import {NgModule} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ModalComponent as ModalComponent} from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule,
    TranslateModule,
  ]
})
export class ModalModule {
}

export * from './modal.component';
