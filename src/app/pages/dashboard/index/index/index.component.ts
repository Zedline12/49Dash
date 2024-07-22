import { Component, OnInit } from '@angular/core';
import { AppMangerService } from '../../../../core/services/features/appManger.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  constructor(private appMangerServ: AppMangerService) {}

 async ngOnInit() {
 
  }
}
