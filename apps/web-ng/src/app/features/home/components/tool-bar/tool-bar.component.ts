import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'myworkspace-tool-bar',
  templateUrl: 'tool-bar.component.html',
})
export class ToolBarComponent extends BaseComponent {
  constructor() {
    super();
  }
}
