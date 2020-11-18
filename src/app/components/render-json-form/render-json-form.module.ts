import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RenderJsonFormComponent} from './render-json-form.component';
import { InputModule } from '../forms';
import { GridModule } from 'src/app/directives/grid/grid.module';
import { DropdownModule } from '../forms/dropdown/dropdown.module';
import { DatePickerModule } from '../forms/date-picker/date-picker.module';

@NgModule({
  declarations: [RenderJsonFormComponent],
  exports: [RenderJsonFormComponent],
  imports: [
    CommonModule,
    InputModule,
    DropdownModule,
    DatePickerModule,
    GridModule,
  ]
})
export class RenderJsonFormModule {
}

export * from './render-json-form.component';
