import {Component, OnInit} from '@angular/core';
import {AuthService, NavigationService} from '../../services';

declare var M: any;

export interface NavItem {
  name: string;
  path: string;
  subItems: string[];
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor(
    private authSrv: AuthService,
    public navSrv: NavigationService
  ) {
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems);
    });
  }

  get pages(): NavItem[] {
    return this.navSrv.pages;
  }

  get currentPageName(): string {
    return this.navSrv.currentPage.name;
  }

  get subItems(): string[] {
    return this.navSrv.subItems;
  }

  async logout(): Promise<void> {
    await this.authSrv.logout();
    window.location.reload();
  }
}
