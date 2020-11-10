import {Component, Input} from '@angular/core';
import {NavigationService} from '../../services';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html'
})
export class TabContentComponent {
  @Input() name: string;

  constructor(private navSrv: NavigationService) {
  }

  get show(): boolean {
    return this.navSrv.hash === this.name;
  }
}
