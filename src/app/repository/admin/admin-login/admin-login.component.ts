import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthProvider} from '../../../../_providers/AuthProvider';
import {AccountService} from '../../../../_services/account.services';
import {CookieAlias} from '../../../../_helpers/CookieAlias';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string;
  constructor(private router:Router, private authProvider: AuthProvider, private accountService:AccountService, private cookieAlias: CookieAlias) { }

  ngOnInit() {
    if(this.authProvider.GetSession(this.cookieAlias.accessToken)!=null)
    this.router.navigateByUrl('/admin/dashboard');
  }

  Login()
  {
    this.authProvider.CreateSession(this.cookieAlias.accessToken,this.username);
    this.authProvider.CreateSession(this.cookieAlias.userRole,"admin");
    this.accountService.changeFlag(true);
    this.router.navigateByUrl('/admin/dashboard');
  }
}
