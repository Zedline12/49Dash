import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarService } from 'app/core/services/core/sideBar.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width:0}),
        animate('0.3s ease-out', style({ width:'*' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ width:0})),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  innerWidth!: number;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  logout() {
    localStorage.clear()
    this.router.navigate(['/auth'])
  }
  constructor(public sideBarServ: SideBarService,public router:Router) {}
}
