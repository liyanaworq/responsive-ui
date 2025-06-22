import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    // AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class ComponentModule {}
