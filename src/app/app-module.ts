import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    AppComponent
} from './';
import {
    HttpModule
} from '@angular/http';
import {
    ListService
} from './shared/list/list.service';
import {
    User
} from './shared/user/user.model';

import {
    UserService
} from './shared/user/user.service';

import {
    appRouterProviders,
} from './app.routes';



import {
    ListComponent
} from './shared/list/list.component';


import {
    FormsModule
} from '@angular/forms';
import {
    AuthGuard
} from './auth-guard';
@NgModule({
    declarations: [AppComponent], // Component and directives
    imports: [BrowserModule, HttpModule, FormsModule], // , module dependencies
    bootstrap: [AppComponent], // root Component
    providers: [ListService, UserService, ListComponent, appRouterProviders, AuthGuard] // service
})
export class AppModule {}
