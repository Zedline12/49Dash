import { BehaviorSubject, Observable, of, Subscription, tap } from 'rxjs';
import { HttpService } from '../core/http.service';
import { apiEndPoints } from '../../constants/api.constant';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { IUser } from 'app/core/models/user/IUser';

@Injectable({ providedIn: 'root' })
export class UserService implements OnDestroy {
  constructor(private http: HttpService) {}
  users: BehaviorSubject<Partial<IUser>[]> = new BehaviorSubject<Partial<IUser>[]>([]);
  userProfile: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private getAllUsersSubscription!: Subscription;
  private getUserProfileSubscription!: Subscription;
  getAllUsersService(): void {
    this.getAllUsersSubscription = this.http
      .get(apiEndPoints.users.getAllUsers)
      .pipe(
        tap((users) => {
          this.users.next(new SuccessResponse(users).paginatedData()); // Push fetched data to subscribers
        })
      )
      .subscribe();
  }
  getUserProfile(id: string): void {
    this.getUserProfileSubscription=this.getAllUsersSubscription = this.http
    .get(apiEndPoints.users.getUserProfile+`/${id}`)
    .pipe(
      tap((users) => {
        this.userProfile.next(new SuccessResponse(users).data()); // Push fetched data to subscribers
      })
    )
    .subscribe();
  }
   ngOnDestroy(): void {
     this.getAllUsersSubscription.unsubscribe()
     this.getUserProfileSubscription.unsubscribe()
   }
}
