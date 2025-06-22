// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ComponentModule } from './components/component.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    ProfileComponent, 
  ],
  imports: [BrowserModule, AppRoutingModule, ComponentModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
