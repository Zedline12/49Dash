import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarAnimationService } from 'app/core/services/features/animations/sidebar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  constructor(private router:Router,private sideBarAnimationService: SideBarAnimationService) {}


  innerWidth!: number;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.sideBarAnimationService.init(this.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.sideBarAnimationService.init(this.innerWidth);
  }
}
