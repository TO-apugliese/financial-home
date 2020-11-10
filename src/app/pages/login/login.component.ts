import {Component} from '@angular/core';
import {AuthService} from 'src/app/services';
import {InputType, MessageType} from '../../components';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  messageType = MessageType;
  inputType = InputType;
  showLoading = false;

  credentials = {
    userName: '',
    password: ''
  };
  msg: { type: MessageType, text: string };

  constructor(private auth: AuthService, private router: Router) {

  }

  async login(): Promise<void> {
    if (!this.credentials.userName || !this.credentials.password) {
      this.msg = {
        type: MessageType.INFO,
        text: 'Füll Benutzername und Passwort aus',
      };

      return;
    }

    this.showLoading = true;

    const httpCode = await this.auth.login(
      this.credentials.userName,
      this.credentials.password
    );

    if (httpCode === 200) { window.location.reload(); }

    if (httpCode > 200) {
      this.msg = {
        type: MessageType.ERROR,
        text: 'Benutzername oder Passwort ist falsch',
      };

      this.showLoading = false;
    }
  }
}
