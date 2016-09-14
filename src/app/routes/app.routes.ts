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
    path: '',
    component: UserComponent
}, {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
}, {
    path: '**',
    redirectTo: ''
}];
export const routing = RouterModule.forRoot(appRoutes)