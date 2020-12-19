import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'nx-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
})
export class NavigationBarComponent extends BaseComponent {
  /** 是否展开 */
  open: boolean = false;

  constructor(
    public homeService: HomeService
  ) {
    super();
  }
}
