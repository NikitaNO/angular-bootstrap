import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';
import Workflow from 'app/shared/services/workflow.service';
import Actions from './shared/actions/Actions';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Workflow,
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
