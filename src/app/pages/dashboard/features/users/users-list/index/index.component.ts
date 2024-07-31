import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../../../core/services/features/users.service';
import { BehaviorSubject, filter, Subscription } from 'rxjs';
import { IUserCard } from 'app/core/models/user/IUserCard';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit,OnDestroy {
  filteredUsers!: IUserCard[];
  searchKeys = ['firstName', 'phone', 'email'];
  usersSubscription!: Subscription;
  constructor(public UserServ: UserService) {}
 
  onFilter(event: any) {
    this.filteredUsers = event;
  }
  ngOnDestroy(): void {
   // this.usersSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.UserServ.getAllUsersService();
    this.usersSubscription=this.UserServ.users.subscribe((users) => {
      this.filteredUsers=users
    });
  }
}
