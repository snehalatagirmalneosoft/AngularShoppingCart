import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  { ApiUrlCollection } from '../_helpers/ApiUrlCollection';
import { CookieAlias } from '../_helpers/CookieAlias';
import  { HttpProvider } from '../_providers/HttpProvider';
import { AuthProvider } from '../_providers/AuthProvider';
import { AuthGuard } from '../_providers/AuthGuard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [ApiUrlCollection, HttpProvider,AuthProvider,CookieAlias,CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
