import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../core/services/features/users.service';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  filteredUsers!: [];
  searchKeys = ['first_name', 'phone', 'email'];
  constructor(public UserServ: UserService) {}
 
  onFilter(event: any) {
    this.filteredUsers = event;
  }
  ngOnInit(): void {
    this.UserServ.getAllUsersService();
    this.UserServ.users.subscribe((users) => {
      console.log(users);
    });
  }
}
