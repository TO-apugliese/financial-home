import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login.component';
import { Pages } from './pages/pages';


const routes: Routes = [
  {
    path: Pages.HOME,
    component: HomePageComponent
  },
  {
    path: Pages.LOGIN,
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
