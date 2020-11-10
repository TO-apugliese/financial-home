import {Component} from '@angular/core';
import {NavigationService} from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './ausgaben.component.html',
  styleUrls: ['./ausgaben.component.scss']
})
export class AusgabenComponent {

  constructor(navSrv: NavigationService) {
  }
}
