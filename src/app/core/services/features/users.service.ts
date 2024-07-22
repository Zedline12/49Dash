import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpService } from '../core/http.service';
import { apiEndPoints } from '../../constants/api.constant';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpService) {}
  users: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  usersDumb = [
    {
      image: 'assets/images/profile.jpeg',
      name: 'Jana Khaled',
      phone: 1099772095,
      email: 'bedomohamed307@gmail.com',
    },
    {
      image: 'assets/images/profile.jpeg',
      name: 'Bedo Mohamed',
      phone: 1099772095,
      email: 'bedomohamed307@gmail.com',
    },
  ];
  getAllUsersService(): void {
    this.http
      .get(apiEndPoints.users.getAllUsers)
      .pipe(
        tap((users) => {
          this.users.next(new SuccessResponse(users).paginatedData()); // Push fetched data to subscribers
        })
      )
      .subscribe();
  }
}
