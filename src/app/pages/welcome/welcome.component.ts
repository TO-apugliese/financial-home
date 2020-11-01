import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.login('a.pugliese@gmx.net', 'annsemarie');
   }

  ngOnInit() {
  }

}
