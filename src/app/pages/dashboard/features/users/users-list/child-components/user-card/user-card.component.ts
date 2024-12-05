import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
 @Input() user:any //should create model
      ngOnInit(): void {
    
      }
}
