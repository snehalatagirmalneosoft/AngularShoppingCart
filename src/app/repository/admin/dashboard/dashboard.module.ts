import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminDashboardRoutingComponent } from './dashboard-routing.module';
import { AdminDashboardComponent } from './dashboard.component';

@NgModule({
    imports:[AdminDashboardRoutingComponent, CommonModule],
    declarations:[AdminDashboardComponent]
})

export class AdminDashboardModule {}