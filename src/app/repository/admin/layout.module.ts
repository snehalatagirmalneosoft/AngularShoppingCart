import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingComponent } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarComponent } from './components/menubar/menubar.component';

import { AccountService } from '../../../_services/account.services';


@NgModule({
    imports:[CommonModule, LayoutRoutingComponent],
    declarations:[LayoutComponent, HeaderComponent, FooterComponent, MenubarComponent],
    providers:[AccountService]
})

export class LayoutModule {
    constructor(private accountService:AccountService) {

    }
}