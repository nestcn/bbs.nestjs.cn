import { Component, HostListener, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from './home.service';

@Component({
  selector: 'nx-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
  /** 工具栏抽屉是否打开 */
  drawerOpen: boolean = false;
  /** 是否滚动过 */
  scrolled: boolean = false;

  constructor(
    public homeService: HomeService
  ) {
    super()
  }
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  windowsScroll(event: Event) {
    if (window.pageYOffset) {
      if (!this.scrolled) { this.scrolled = true; }
    } else { this.scrolled = false; }
  }
}
