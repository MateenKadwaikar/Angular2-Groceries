import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router : Router) {}

    canActivate(next : ActivatedRouteSnapshot , state: RouterStateSnapshot) {
        if (sessionStorage.getItem('access_token')) {return true ; };
        this._router.navigate(['']);
        return false;
    }

}
