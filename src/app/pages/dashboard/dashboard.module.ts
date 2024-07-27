import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [IndexComponent, NavbarComponent, NavigatorComponent, SidebarComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
