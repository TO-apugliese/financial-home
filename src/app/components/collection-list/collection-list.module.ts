import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../directives';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconModule } from '../icon/icon.module';
import { RenderJsonFormModule } from '../render-json-form/render-json-form.module';
import { ModalModule } from '../modal/modal.module';
import { CollectionListComponent } from './collection-list.component';
import { GridModule } from 'src/app/directives/grid/grid.module';

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
    ModalModule,
    GridModule,
    RenderJsonFormModule,
  ]
})
export class CollectionListModule {
}

export * from './collection-list.component';
