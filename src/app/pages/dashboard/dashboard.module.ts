import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule, InputModule, MessageModule} from '../../components';
import {ButtonModule} from '../../directives';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    IconModule,
    InputModule,
    MessageModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule { }

export * from './dashboard.component';
