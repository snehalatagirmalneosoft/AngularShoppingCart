import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CookieAlias } from '../_helpers/CookieAlias';

@Injectable()
export class AuthProvider {

    constructor(private cookieService : CookieService, private router : Router, private cookieAlias : CookieAlias){

    }

    CreateSession(key, value) {
        sessionStorage.setItem(key,value);
    }

    GetSession(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    GetUserRole() {
        if(sessionStorage.getItem(this.cookieAlias.userData)!=null) {
                return JSON.parse(sessionStorage.getItem(this.cookieAlias.userData)).role;
        }
        else {
            return 0;
        }
    }

    IsSessionExists(key) {
        if(sessionStorage.getItem(key) != null) {
            return true;
        }
        else {
            return false;
        }
    }

    IsSessionActive() {
        if(sessionStorage.getItem(this.cookieAlias.userData)!=null && sessionStorage.getItem(this.cookieAlias.accessToken)!=null) {
            return true;
        }
        else {
            sessionStorage.clear();
            return false;
        }
    }

    InvalidSession() {
        sessionStorage.clear();
        this.cookieService.deleteAll();
    }

    SetCookie(key, value) {
        this.cookieService.set(key,JSON.stringify(value));
    }

    GetCookie(key) {
        return JSON.parse(this.cookieService.get(key));
    }

    IsCookieExists(key) {
        return this.cookieService.get(key) ? true : false;
    }

    RemoveCookie(key) {
        this.cookieService.delete(key);
    }

    RemoveAllCookies() {
        this.cookieService.deleteAll();
    }

    StoreUrls(key, value) {
        localStorage.setItem(key, value);
    }

    RemoveUrls() {
        localStorage.clear();
        sessionStorage.clear();
    }

    IsUserSessionActive() {
        if(this.IsCookieExists(this.cookieAlias.accessToken) && this.IsCookieExists(this.cookieAlias.userData)) {
            return true;
        }
        else {
            this.RemoveAllCookies();
            return false;
        }
    }

    RedirectByRole() {
        if(this.IsSessionExists(this.cookieAlias.userData))
        {
            let role = this.GetSession(this.cookieAlias.userData)["UserRole"]["RoleName"];
            switch(role){
                case 'Admin': this.router.navigateByUrl("/admin/admin-dashboard"); break;
                case 'Vendor': this.router.navigateByUrl("/vendor/vendor-dashboard"); break;
                case 'Customer': this.router.navigateByUrl("/customer/customer-dashboard"); break;
                default :  this.router.navigateByUrl("home"); break;
            }
        }
        else {
            this.RemoveAllCookies();
            this.router.navigateByUrl("home");
        }
    }
}