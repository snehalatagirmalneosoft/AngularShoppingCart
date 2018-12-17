import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthProvider } from '../_providers/AuthProvider';
import { CookieAlias } from '../_helpers/CookieAlias';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AccountService {
    private userLogged =new BehaviorSubject<boolean>(this.authProvider.GetSession(this.cookieAlias.accessToken)!=null ? true : false);
    cast = this.userLogged.asObservable();

    private userName =new BehaviorSubject<string>(this.authProvider.GetSession(this.cookieAlias.accessToken)!=null ? this.authProvider.GetSession(this.cookieAlias.accessToken) : '');
    castName = this.userName.asObservable();

    constructor(private authProvider: AuthProvider, private router: Router, private cookieAlias: CookieAlias) { 

    }

    changeFlag(login)
    {
        this.userLogged.next(login);
        if(login)
            this.userName.next(this.authProvider.GetSession(this.cookieAlias.accessToken));
        else
            this.userName.next('');
    }
}