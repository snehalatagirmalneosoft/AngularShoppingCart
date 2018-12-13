import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:'./home/home.module#HomeModule'
},
{
    path:'register',
    loadChildren:'./register/register.module#RegisterModule'
},
{
    path:'login',
    loadChildren:'./login/login.module#LoginModule'
},
{
    path:'admin',
    loadChildren:'./repository/layout.module#LayoutModule'
},
{
    path:'user',
    loadChildren:'./repository/layout.module#LayoutModule'
},
{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},
{
    path:'notfound',
    loadChildren:'./notfound/notfound.module#NotFoundModule'
},
{
    path:'**',
    redirectTo:'notfound'
}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
