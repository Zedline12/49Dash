import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarService } from 'app/core/services/core/sideBar.service';
import $ from 'jquery';
import { SideBarAnimationService } from 'app/core/services/features/animations/sidebar.service';
@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ left: -250 }),
        animate('0.6s ease-out', style({ left: 0 })),
      ]),
      transition(':leave', [animate('0.6s ease-in', style({ left: -250 }))]),
    ]),
  ],
})
export class SidebarComponent {
  isMobileView!: boolean;
 
  dashToggle() {
  
      this.sideBarAnimationService.toggle();
   
  }

  itemToggle(itemId: string) {
    this.sideBarAnimationService.toggleItemCollapse(itemId);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
  constructor(
    public sideBarServ: SideBarService,
    private sideBarAnimationService: SideBarAnimationService,
    public router: Router,
  ) {}
}
