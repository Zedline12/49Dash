import { Component, OnInit } from '@angular/core';
import { AppMangerService } from '../../../../core/services/features/appManger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  constructor(private appMangerServ: AppMangerService,private router:Router) {}

 async ngOnInit() {
    console.log(this.router.url)
  }
}
