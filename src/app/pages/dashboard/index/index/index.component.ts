import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarAnimationService } from 'app/core/services/features/animations/sidebar.service';
import { TimelineLite } from 'gsap';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
    private sideBarAnimationService: SideBarAnimationService,
  ) {}

  innerWidth!: number;
  initAnimations() {
    const t1 = new TimelineLite();
    t1.from(
      '.main-container',
      2,
      { backgroundImage: 'linear-gradient(black, 5%, black)' },
    );
    t1.play();
  }
  ngOnInit(): void {
  //  this.initAnimations();
    this.innerWidth = window.innerWidth;
    this.sideBarAnimationService.init(this.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.sideBarAnimationService.init(this.innerWidth);
  }
}
