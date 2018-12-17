import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthProvider } from '../../../../_providers/AuthProvider';
import { AccountService } from '../../../../_services/account.services';
import { CookieAlias } from '../../../../_helpers/CookieAlias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string="";
  password:string="";

  constructor(private router:Router, private authProvider:AuthProvider, private accountService: AccountService, private cookieAlias: CookieAlias) { }

  ngOnInit() {
    if(this.authProvider.GetSession(this.cookieAlias.accessToken)!=null)
    {
      console.log(this.email);
      this.router.navigateByUrl('/user/dashboard');
    }
  }

  Login() {
     if(this.email=="" || this.password=="")
       alert("Please Enter valid credentials");
     else
     {
          this.authProvider.CreateSession(this.cookieAlias.accessToken, this.email);
          this.authProvider.CreateSession(this.cookieAlias.userRole, "user");
          this.accountService.changeFlag(true);
          this.router.navigateByUrl("/user/dashboard");
    }
  }

}
