import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../core/services/features/users.service';
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
  search() {
    const searchedUsers = this.UserServ.users.value.filter((user: any) => {
      return user['name'] == 'Bedo Mohamed';
    });
    this.UserServ.users.next(searchedUsers);
  }
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
