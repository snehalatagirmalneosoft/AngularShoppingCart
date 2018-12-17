import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    loadChildren:'./repository/user/layout.module#LayoutModule'
},
{
    path:'admin',
    loadChildren:'./repository/admin/layout.module#LayoutModule'
},
{
    path:'',
    redirectTo:'user',
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
