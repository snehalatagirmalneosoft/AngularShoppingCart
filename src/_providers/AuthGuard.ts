import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

import { AuthProvider } from './AuthProvider';
import { CookieAlias } from '../_helpers/CookieAlias';

@Injectable()
export class AuthGuard implements CanActivate {

    requestedUrl:any;
    pageAccess:any[];
    constructor(private authProvider : AuthProvider, private router : Router, private cookieAlias : CookieAlias) {

    }

    canActivate(route : ActivatedRouteSnapshot) {
        // if(this.authProvider.GetSession(this.cookieAlias.accessToken) && 
        //     this.authProvider.GetSession(this.cookieAlias.apiUrls) && 
        //     this.authProvider.GetSession(this.cookieAlias.userData)) {
            if(this.authProvider.GetSession(this.cookieAlias.accessToken)) {
                if(route.data.role==undefined) {
                    this.router.navigateByUrl('notfound'); //notfound
                    return false;
                }

                if(route.data.role.toLowerCase() == this.authProvider.GetSession(this.cookieAlias.userRole).toLowerCase()) {
                    return true;
                }
                else {
                    this.router.navigateByUrl('notfound'); //unauthorize
                    return false;
                }
        }
        else {
            this.router.navigateByUrl('/'); //default
            return false;
        }
    }
}