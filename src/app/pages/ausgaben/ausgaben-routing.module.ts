import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AusgabenComponent } from './ausgaben.component';

const routes: Routes = [
  { path: '', component: AusgabenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AusgabenRoutingModule { }

