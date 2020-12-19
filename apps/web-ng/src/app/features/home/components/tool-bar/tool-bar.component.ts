import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'nx-tool-bar',
  styleUrls: ['tool-bar.component.scss'],
  templateUrl: 'tool-bar.component.html',
})
export class ToolBarComponent extends BaseComponent {
  constructor() {
    super();
  }
}
