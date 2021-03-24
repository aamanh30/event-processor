import { RouteSlug } from './../../../../core/enums/route-slug.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initNavItems();
  }

  initNavItems(): void {
    // const navlist = ['assignments', 'classes', 'content', 'dashboard', 'gradebook', 'overview', 'results', 'roster'];
    const navlist = [ RouteSlug.content, RouteSlug.assignments, RouteSlug.results];
    const navItems = navlist.map(
      navItem => ({
        label: navItem,
        routerLink: `/${navItem}`
      })
    );

    this.navItems = navItems;
  }
}
