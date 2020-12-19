import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'myworkspace-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
})
export class NavigationBarComponent extends BaseComponent {
  constructor() {
    super();
  }
}
