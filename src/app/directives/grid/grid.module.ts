import { NgModule } from '@angular/core';
import { ColDirective } from './col.directive';
import { GridDirective } from './grid.directive';
import { RowDirective } from './row.directive';

@NgModule({
  exports: [
    GridDirective,
    RowDirective,
    ColDirective,
  ],
  declarations: [
    GridDirective,
    RowDirective,
    ColDirective,]
})
export class GridModule {
}
