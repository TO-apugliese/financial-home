import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionListModule, IconModule, InputModule, MessageModule, TabContentModule} from '../../components';
import {ButtonModule} from '../../directives';
import {AusgabenComponent} from './ausgaben.component';
import {AusgabenRoutingModule} from './ausgaben-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AusgabenRoutingModule,
    ButtonModule,
    IconModule,
    InputModule,
    MessageModule,
    TabContentModule,
    CollectionListModule,
  ],
  declarations: [AusgabenComponent],
  exports: [AusgabenComponent],
  providers: []
})
export class AusgabenModule { }

export * from './ausgaben.component';
