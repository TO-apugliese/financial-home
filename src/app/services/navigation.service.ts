import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavItem} from '../components';
import {Pages, PagesConfig} from '../config';

@Injectable()
export class NavigationService {

  blackListPages = [Pages.LOGIN];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  get pages(): NavItem[] {
    return Array.from(PagesConfig.keys())
      .filter((p: Pages) => this.blackListPages.indexOf(p) === -1)
      .map((name: Pages) => {
        const subItems = PagesConfig.get(name);
        const firstSubItem = subItems.length > 0 ? `#${subItems[0]}` : '';
        const path = `/${name}${firstSubItem}`;

        return {name, path, subItems};
      });
  }

  get hash(): string {
    return this.route.snapshot.fragment;
  }

  get currentPage(): NavItem {
    const pageName = (
      this.router.url
        .replace('/', '')
        .split('?')[0]
        .split('#')[0]
    ) as Pages;

    if (!pageName) {
      return;
    }

    return this.pages.find(p => p.name === pageName);
  }

  get subItems(): string[] {
    if (!this.currentPage) {
      return [];
    }
    return this.currentPage.subItems;
  }

  get showNav(): boolean {
    const page = (this.router.url
      .replace('/', '')
      .split('?')[0]
      .replace('/', '')) as Pages;

    return this.blackListPages.indexOf(page) === -1;
  }
}
