import { ROUTER_DIRECTIVES } from '@angular/router';

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {}
