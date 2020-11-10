import {Component, Input} from '@angular/core';
import {NavigationService} from '../../services';

@Component({
  selector: 'app-tab-headers',
  templateUrl: './tab-headers.component.html',
  styleUrls: ['./tab-headers.component.scss'],
})
export class TabHeadersComponent {
  @Input() items: string[];

  constructor(private navSrv: NavigationService) {
  }

  get currentPageName(): string {
    return this.navSrv.currentPage.name;
  }

  get hash(): string {
    return this.navSrv.hash;
  }
}
