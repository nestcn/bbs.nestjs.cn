import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'nx-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
})
export class NavigationBarComponent extends BaseComponent {
  /** 是否展开 */
  open: boolean = false;

  constructor() {
    super();
  }
}
