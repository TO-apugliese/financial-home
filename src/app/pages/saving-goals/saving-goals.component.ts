import {Component} from '@angular/core';
import {NavigationService} from '../../services';

@Component({
  selector: 'app-saving-goals',
  templateUrl: './saving-goals.component.html',
  styleUrls: ['./saving-goals.component.scss']
})
export class SavingGoalsComponent {

  constructor(navSrv: NavigationService) {
  }
}
