import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { authModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    dashboardModule,
    AppRoutingModule,
    authModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }