import {
    Routes,
    RouterModule,
} from '@angular/router';

import {
    UserComponent
} from '../shared/user/user.component';
import {
    ListComponent
} from '../shared/list/list.component';
import {
    AuthGuard
} from './auth-guard';


export const appRoutes: Routes = [
{
    path: 'login',
    component: UserComponent
}, {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
}, {
    path: '**',
    redirectTo: 'login'
}];
export const routing = RouterModule.forRoot(appRoutes);
