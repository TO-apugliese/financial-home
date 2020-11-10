import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionListComponent} from './collection-list.component';
import {TranslateModule} from '@ngx-translate/core';
import {IconModule} from "..";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CollectionListComponent],
  exports: [CollectionListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IconModule,
    FormsModule,
  ]
})
export class CollectionListModule {
}

export * from './collection-list.component';
