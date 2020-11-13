import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CollectionListComponent} from './collection-list.component';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from '../../directives';
import {FlyoutModule, IconModule} from '..';

@NgModule({
  declarations: [CollectionListComponent],
  exports: [CollectionListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    FormsModule,
    ButtonModule,
    FlyoutModule,
  ]
})
export class CollectionListModule {
}

export * from './collection-list.component';
