import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SideBarService } from 'app/core/services/core/sideBar.service';
import { RouterModule } from '@angular/router';
import { SideBarAnimationService } from 'app/core/services/features/animations/sidebar.service';
@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    NavigatorComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, RouterModule],
  providers: [SideBarService, SideBarAnimationService],
})
export class DashboardModule {}
