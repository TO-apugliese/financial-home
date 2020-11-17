import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderJsonFormComponent} from './render-json-form.component';
import { InputModule } from '../forms';
import { GridModule } from 'src/app/directives/grid/grid.module';

@NgModule({
  declarations: [RenderJsonFormComponent],
  exports: [RenderJsonFormComponent],
  imports: [
    CommonModule,
    InputModule,
    GridModule,
  ]
})
export class RenderJsonFormModule {
}

export * from './render-json-form.component';
