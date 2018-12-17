import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../../_services/account.services';
import { Observable } from 'rxjs';

@Component({
    selector:'layout',
    templateUrl:'Layout.component.html'
})

export class LayoutComponent implements OnInit {
    isLogged:boolean;

    constructor(private accountService:AccountService, private router : Router) {
       
    }
    ngOnInit() {
        this.accountService.cast.subscribe(user=>this.isLogged=user);
    }
}