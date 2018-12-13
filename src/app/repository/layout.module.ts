import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingComponent } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports:[CommonModule, LayoutRoutingComponent],
    declarations:[LayoutComponent]
})

export class LayoutModule {
    
}