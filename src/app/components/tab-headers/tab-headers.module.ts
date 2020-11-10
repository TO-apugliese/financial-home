import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabHeadersComponent} from './tab-headers.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [TabHeadersComponent],
  exports: [TabHeadersComponent],
  imports: [
    CommonModule,
    TranslateModule,
  ],
})
export class TabHeadersModule {
}

export * from './tab-headers.component';
