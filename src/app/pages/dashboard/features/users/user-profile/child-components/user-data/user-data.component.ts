import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/features/users.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.3s ease-out', style({ height:'*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({  opacity: 1 }),
        animate('0.3s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
    
  ],
})
export class UserDataComponent implements OnInit {
  constructor(public userServ: UserService) { }
  ngOnInit(): void {

  }
  public showAddionalData: boolean = false;
}
