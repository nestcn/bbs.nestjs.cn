import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'nx-discussion-list',
  templateUrl: 'discussion-list.component.html',
})
export class DiscussionListComponent extends BaseComponent {
  constructor() {
    super();
  }
}
