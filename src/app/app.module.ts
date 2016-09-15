import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    HttpModule
} from '@angular/http';
import {
    FormsModule
} from '@angular/forms';
import {
    MdButtonModule
} from '@angular2-material/button';
import {
    MdInputModule
} from '@angular2-material/input';
import {
    MdListModule
} from '@angular2-material/list/list';
import {
    MdCardModule
} from '@angular2-material/card';
import {
    MdToolbarModule
} from '@angular2-material/toolbar';

import {
    AppComponent
} from './';
import {
    routing,
} from './routes/app.routes';
import {
    LogOutComponent
} from './user/user.logout';
import {
    ListComponent
} from './list/list.component';
import {
    InputComponent
} from './list/input.component';
import {
    OrderByPipe
} from './pipes/app.orderbypipe';
import {
    SearchByPipe
} from './pipes/app.searchbypipe';
import {
    AuthGuard
} from './routes/auth-guard';
import {
    UserComponent
} from './user/user.component';


@NgModule({
    declarations: [AppComponent, LogOutComponent, OrderByPipe, SearchByPipe, UserComponent,
        ListComponent, InputComponent], // directives, components, and pipes
    imports: [MdButtonModule, MdListModule,MdCardModule,MdToolbarModule, BrowserModule, HttpModule, FormsModule, routing, MdInputModule], // module dependencies
    bootstrap: [AppComponent], // root Component
    providers: [AuthGuard] // service
})
export class AppModule {}
