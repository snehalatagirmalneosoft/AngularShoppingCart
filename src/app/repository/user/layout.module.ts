import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingComponent } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AccountService } from '../../../_services/account.services';

@NgModule({
    imports:[CommonModule, LayoutRoutingComponent],
    declarations:[LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent],
        providers:[AccountService]
})

export class LayoutModule {
    
}