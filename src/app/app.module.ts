import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleBarComponent } from './shared/components/title-bar/title-bar.component';
import { SharedComponents } from './shared/components/shared-components.module';

const routes: Routes = [{
  component: AppComponent,
  path: ''
}];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
