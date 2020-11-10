import {NgModule} from '@angular/core';
import {ButtonDirective} from './button.directive';

@NgModule({
  exports: [
    ButtonDirective
  ],
  declarations: [ButtonDirective]
})
export class ButtonModule {
}
