import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string="";
  password:string="";
  options:string="";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Login() {
    if(this.email=="" || this.password=="")
      alert("Please Enter valid credentials");
    else
    {
        if(this.options.toLowerCase() =="user")
          this.router.navigateByUrl("/user/user-dashboard");
        else if(this.options.toLowerCase() =="admin")
          this.router.navigateByUrl("/admin/admin-dashboard");  
        else
          alert("Please select login user");
    }
  }

}
