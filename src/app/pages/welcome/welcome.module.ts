import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/services';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [AuthService]
})
export class WelcomeModule { }
