import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'app/core/services/core/sideBar.service';
import $ from 'jquery';
@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(public sideBarServ: SideBarService) { }
  
  ngOnInit(): void {
    
  }
  toggleSidebar() {
    
  }
}
