import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../../../../_services/account.services';
import { AuthProvider } from '../../../../../_providers/AuthProvider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser:string;
  isLogged:boolean;
  constructor(private accountService:AccountService, private authProvider: AuthProvider, private router:Router) {
    
  }

  ngOnInit() {
    this.accountService.castName.subscribe(user=>this.loggedUser=user);
    this.accountService.cast.subscribe(user=>this.isLogged=user);
  }

  LogoutUser()
  {
    this.authProvider.RemoveUrls();
    this.accountService.changeFlag(false);
    this.router.navigateByUrl("/user");
  }

}
