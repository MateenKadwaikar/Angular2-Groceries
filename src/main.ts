import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills.ts';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);
