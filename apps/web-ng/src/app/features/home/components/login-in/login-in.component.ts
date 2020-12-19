import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'nx-login-in',
  templateUrl: 'login-in.component.html',
})
export class LoginInComponent extends BaseComponent {
  constructor(
    public homeService: HomeService
  ) {
    super();
  }
}
