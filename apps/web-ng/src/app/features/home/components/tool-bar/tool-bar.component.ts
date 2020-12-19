import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'nx-tool-bar',
  templateUrl: 'tool-bar.component.html',
})
export class ToolBarComponent extends BaseComponent {
  constructor(
    public homeService: HomeService
  ) {
    super();
  }
}
