import { BehaviorSubject, Observable, of, Subscription, tap } from 'rxjs';
import { HttpService } from '../../core/http.service';
import { apiEndPoints } from '../../../constants/api.constant';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../../classes/SuccessResponse';
import { IUser } from 'app/core/models/user/IUser';
import { IUserCard } from 'app/core/models/user/IUserCard';
import { IWallet } from 'app/core/models/wallets/IWallet';

@Injectable({ providedIn: 'root' })
export class UserService implements OnDestroy {
  constructor(private http: HttpService) {}
  users: BehaviorSubject<IUserCard[]> = new BehaviorSubject<IUserCard[]>([]);
  userProfile: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  UsersProfiles: BehaviorSubject<any> = new BehaviorSubject<any>([]);
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
    this.getUserProfileSubscription = this.getAllUsersSubscription = this.http
      .get(apiEndPoints.users.getUserProfile + `/${id}`)
      .pipe(
        tap((users) => {
          this.userProfile.next(new SuccessResponse(users).data()); // Push fetched data to subscribers
        })
      )
      .subscribe();
  }
   getUsersProfiles(): void {
     this.http
       .get(apiEndPoints.users.getUsersProfiles)
       .pipe(
         tap((users) => {
           this.UsersProfiles.next(new SuccessResponse(users).data()); // Push fetched data to subscribers
         })
       )
       .subscribe();
   }
  ngOnDestroy(): void {
    this.getAllUsersSubscription.unsubscribe();
    this.getUserProfileSubscription.unsubscribe();
  }
}
