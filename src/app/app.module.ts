import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { ParamService } from './_services/param.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './layouts/default/default.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule, // for side-bar
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    DefaultModule // 'heavy lifting' is deferred to here
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, UserService, AuthGuard, AuthenticationService, ParamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
