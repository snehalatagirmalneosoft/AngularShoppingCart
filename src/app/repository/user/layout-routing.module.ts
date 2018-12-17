import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../../../_providers/AuthGuard';

const routes:Routes=[
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'login',
                loadChildren:'./login/login.module#LoginModule'
            },
            {
                path:'register',
                loadChildren:'./register/register.module#RegisterModule'
            },
            {
                path:'home',
                loadChildren:'./home/home.module#HomeModule'
            },
            {
                path:'dashboard',
                loadChildren:'../user/dashboard/dashboard.module#UserDashboardModule',
                data:{ role: 'user'},
                canActivate:[AuthGuard]  
            },
            {
                path:'',
                redirectTo:'login',
                pathMatch:'full'
            },

        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LayoutRoutingComponent {}