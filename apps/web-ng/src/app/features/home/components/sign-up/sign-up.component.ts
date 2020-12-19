import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'nx-sign-up',
  templateUrl: 'sign-up.component.html',
})
export class SignUpComponent extends BaseComponent {
  constructor(
    public homeService: HomeService
  ) {
    super();
  }
}
