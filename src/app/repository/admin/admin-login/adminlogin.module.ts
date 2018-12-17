import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginRoutingComponent } from './adminlogin-routing.module';

@NgModule({
    imports:[CommonModule, AdminLoginRoutingComponent, FormsModule],
    declarations:[AdminLoginComponent]
})

export class AdminLoginModule {
    
}