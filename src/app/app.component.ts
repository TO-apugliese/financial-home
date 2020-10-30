import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'financial-home';

  constructor(private authSrv: AuthService) {

  }

  get isLoggedIn() {
    return this.authSrv.isLoggedIn;
  }
}
