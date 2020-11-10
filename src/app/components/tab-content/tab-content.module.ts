import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabContentComponent} from './tab-content.component';

@NgModule({
  declarations: [TabContentComponent],
  exports: [TabContentComponent],
  imports: [
    CommonModule,
  ]
})
export class TabContentModule {
}

export * from './tab-content.component';
