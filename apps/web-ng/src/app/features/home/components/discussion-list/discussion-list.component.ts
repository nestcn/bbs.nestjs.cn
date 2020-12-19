import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'nx-discussion-list',
  templateUrl: 'discussion-list.component.html',
})
export class DiscussionListComponent extends BaseComponent {
  data: any[] = [...new Array(100)];

  constructor() {
    super();
  }
}
