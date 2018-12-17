import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import {UserDashboardRoutingComponent} from './dashboard-routing.module';
import {UserDashboardComponent} from './dashboard.component';

@NgModule({
imports:[CommonModule,FormsModule, UserDashboardRoutingComponent],
declarations:[UserDashboardComponent]
})

export class UserDashboardModule {}