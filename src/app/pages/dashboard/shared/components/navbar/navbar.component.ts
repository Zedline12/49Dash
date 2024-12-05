import { Component, HostListener, OnInit } from '@angular/core';
import { SideBarService } from 'app/core/services/core/sideBar.service';
import { SideBarAnimationService } from 'app/core/services/features/animations/sidebar.service';
import $ from 'jquery';
@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(public sideBarAnimationService: SideBarAnimationService) { }

    ngOnInit(): void {
      
    }
  toggleSidebar() {
   this.sideBarAnimationService.toggle()
  }
}
