import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionListModule, IconModule, InputModule, MessageModule, TabContentModule} from '../../components';
import {ButtonModule} from '../../directives';
import {SavingGoalsComponent} from './saving-goals.component';
import {SavingGoalsRoutingModule} from './saving-goals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SavingGoalsRoutingModule,
    ButtonModule,
    IconModule,
    InputModule,
    MessageModule,
    TabContentModule,
    CollectionListModule,
  ],
  declarations: [SavingGoalsComponent],
  exports: [SavingGoalsComponent],
  providers: []
})
export class SavingGoalsModule { }

export * from './saving-goals.component';
