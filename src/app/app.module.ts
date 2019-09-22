import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GstateModule} from 'grippio-gstate';
import {BaseModule} from './base/base.module';
import {PagesModule} from './pages/pages.module';
import {MasterLayoutComponent} from './base/master-layout/master-layout.component';
import {MasterRouteModule} from './base/master-layout/master-route.module';
import {LandingModule} from './pages/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent
  ],
  imports: [
    PagesModule,
    BaseModule,
    BrowserModule,
    AppRoutingModule,
    MasterRouteModule,
    LandingModule,
    GstateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
