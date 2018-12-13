import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes:Routes=[
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'admin-dashboard',
                loadChildren:'./admin/dashboard/dashboard.module#AdminDashboardModule'
            },
            {
                path:'user-dashboard',
                loadChildren:'./user/dashboard/dashboard.module#UserDashboardModule'
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LayoutRoutingComponent {}