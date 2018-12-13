import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import  { ApiUrlCollection } from '../_helpers/ApiUrlCollection';
import { CookieAlias } from '../_helpers/CookieAlias';
import  { HttpProvider } from '../_providers/HttpProvider';
import { AuthProvider } from '../_providers/AuthProvider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [ApiUrlCollection, HttpProvider,AuthProvider,CookieAlias,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
