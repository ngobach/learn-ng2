import { Injectable } from '@angular/core';
import { Auth } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: Auth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return Promise.resolve(this.auth.loggedIn);
    }
}