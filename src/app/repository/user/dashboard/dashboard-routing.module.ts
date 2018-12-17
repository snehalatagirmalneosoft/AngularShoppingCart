import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserDashboardComponent} from './dashboard.component';

const routes:Routes=[
    {
        path:'',
        component: UserDashboardComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserDashboardRoutingComponent {}