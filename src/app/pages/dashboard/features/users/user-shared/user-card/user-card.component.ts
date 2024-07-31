import { Component, Input, OnInit } from '@angular/core';
import { IUserCard } from 'app/core/models/user/IUserCard';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUserCard; //should create model
  ngOnInit(): void {}
}
