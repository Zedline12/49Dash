import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss',
})
export class NavigatorComponent implements OnInit {
  constructor(private router: Router) {}
  routes!: string[];
  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      const url = this.router.url;
      this.routes = url.split('/').filter((x) => {
        if (x == '') return false;
        return true;
      });
    });
  }
}
