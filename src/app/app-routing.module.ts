import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AusgabenComponent, DashboardComponent, LoginComponent} from './pages';
import {AuthGuard} from './guards';
import { Pages } from './config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Pages.DASHBOARD
  },
  {
    path: Pages.DASHBOARD,
    component: DashboardComponent,
    // loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.AusgabenModule),
    canActivate: [AuthGuard],
  },
  {
    path: Pages.LOGIN,
    component: LoginComponent,
    // loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: Pages.OUTGOINGS,
    component: AusgabenComponent,
    // loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
