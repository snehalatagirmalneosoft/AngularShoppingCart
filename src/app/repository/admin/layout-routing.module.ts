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
                path:'dashboard',
                loadChildren:'./dashboard/dashboard.module#AdminDashboardModule',
                data:{ role: 'admin'},
                canActivate:[AuthGuard]  
            },
            {
                path:'login',
                loadChildren:'./admin-login/adminlogin.module#AdminLoginModule'
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