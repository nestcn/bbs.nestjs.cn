import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'myworkspace-top-bar',
  templateUrl: 'top-bar.component.html',
})
export class TopBarComponent extends BaseComponent {
  constructor() {
    super();
  }
}
