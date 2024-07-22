import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [IndexComponent, NavbarComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
