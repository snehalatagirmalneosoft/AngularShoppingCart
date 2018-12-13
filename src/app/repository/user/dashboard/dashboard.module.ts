import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserDashboardRoutingComponent} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
imports:[CommonModule, UserDashboardRoutingComponent],
declarations:[DashboardComponent]
})

export class UserDashboardModule {}