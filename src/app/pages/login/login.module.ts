import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/services';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import {ButtonModule} from '../../directives';
import {IconModule, InputModule, MessageModule} from '../../components';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    IconModule,
    InputModule,
    MessageModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class LoginModule { }

export * from './login.component';
