// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent, environment } from './app/';
// import { disableDeprecatedForms, provideForms  } from '@angular/forms';
// import {HTTP_PROVIDERS} from "@angular/http";
// import { appRouterProviders } from './app/app.routes';
// import {
//     ListService
// } from './app/shared/list/list.service';
// import { AuthGuard } from './app/auth-guard';

// if (environment.production) {
//   enableProdMode();
  
// }

// bootstrap(AppComponent,[appRouterProviders,ListService, disableDeprecatedForms(),provideForms(), HTTP_PROVIDERS ])
//   .catch((err : any) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app/app-module"

platformBrowserDynamic().bootstrapModule(AppModule);
