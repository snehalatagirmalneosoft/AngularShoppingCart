import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { CookieService } from 'ngx-cookie-service';

/***********************************Importing User Components Start**************************************************/
import { LayoutComponent } from './repository/user/layout.component';
import { HeaderComponent } from './repository/user/components/header/header.component';
import { FooterComponent } from './repository/user/components/footer/footer.component';
import { NavbarComponent } from './repository/user/components/navbar/navbar.component';

import { UserDashboardComponent } from './repository/user/dashboard/dashboard.component';
import { HomeComponent } from './repository/user/home/home.component';
import { LoginComponent } from './repository/user/login/login.component';
import { RegisterComponent } from './repository/user/register/register.component';

import { NotfoundComponent } from './notfound/notfound.component';
/***********************************Importing User Components End**************************************************/

/***********************************Importing Admin Components Start**************************************************/
import { AdminLayoutComponent } from './repository/admin/layout.component';
import { MenubarComponent } from './repository/admin/components/menubar/menubar.component';
import { AdminHeaderComponent } from './repository/admin/components/header/header.component';
import { AdminFooterComponent } from './repository/admin/components/footer/footer.component';

import { AdminLoginComponent } from './repository/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './repository/admin/dashboard/dashboard.component';
/***********************************Importing Admin Components End**************************************************/

/***********************************Importing Services & Helpers Start**************************************************/
import  { ApiUrlCollection } from '../_helpers/ApiUrlCollection';
import { CookieAlias } from '../_helpers/CookieAlias';
import  { HttpProvider } from '../_providers/HttpProvider';
import { AuthProvider } from '../_providers/AuthProvider';
import { AuthGuard } from '../_providers/AuthGuard';
import { AccountService } from '../_services/account.services';
/***********************************Importing Services & Helpers End**************************************************/

const routes: Routes = [
  {
    path:'user',
    component:LayoutComponent,
    children:[
        {
            path:'dashboard',
            component: UserDashboardComponent,
            canActivate:[AuthGuard],
            data: { role:"user" }
        },
        {
            path:'login',
            component: LoginComponent
        },
        {
            path:'register',
            component: RegisterComponent
        },
        {
            path:'home',
            component: HomeComponent
        },
        {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
        }
    ]
},
{
    path:'admin',
    component:AdminLayoutComponent,
    children:[
        {
            path:'dashboard',
            component: AdminDashboardComponent,
            canActivate:[AuthGuard],
            data: { role:"admin" }
        },
        {
            path:'login',
            component: AdminLoginComponent
        },
        {
            path:'',
            redirectTo:'login',
            pathMatch:'full'
        }
    ]
},
{
    path:'',
    redirectTo:'user',
    pathMatch:'full'
},
{
    path:'notfound',
    component:NotfoundComponent
},
{
    path:'**',
    redirectTo:'notfound'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,CommonModule],
  exports: [RouterModule],
  providers: [ApiUrlCollection, HttpProvider,AuthProvider,CookieAlias,CookieService, AuthGuard, AccountService],
  declarations:[LayoutComponent, UserDashboardComponent, HomeComponent,LoginComponent, RegisterComponent, HeaderComponent,
    FooterComponent, NavbarComponent,NotfoundComponent,
    AdminLoginComponent, AdminDashboardComponent,AdminLayoutComponent,MenubarComponent, AdminFooterComponent, AdminHeaderComponent]
})
export class AppRoutingModule { 

}
