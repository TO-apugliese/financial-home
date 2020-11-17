import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {TabHeadersModule} from '../tab-headers/tab-headers.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    TabHeadersModule,
    IconModule,
  ]
})
export class NavBarModule {
}

export * from './nav-bar.component';
