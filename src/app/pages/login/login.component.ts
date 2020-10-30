import { Component } from "@angular/core";
import { AuthService } from 'src/app/services/auth.services';

@Component({
    templateUrl: './login.component.html'
})
export class LoginPageComponent {
    constructor(authSrv: AuthService) {
        authSrv.login('a.pugliese@gmx.net', 'annemarie');
    }
}