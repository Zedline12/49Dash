import { BehaviorSubject, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { HttpService } from '../../core/http.service';
import { apiEndPoints } from '../../../constants/api.constant';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../../classes/SuccessResponse';
import { IUser } from 'app/core/models/user/IUser';
import { IWallet } from 'app/core/models/wallets/IWallet';

@Injectable({ providedIn: 'root' })
export class UsersWalletsService implements OnDestroy {
  constructor(private http: HttpService) {}
  usersWallets: BehaviorSubject<Array<Partial<IWallet> & Partial<IUser>>> =
    new BehaviorSubject<Array<Partial<IWallet> & Partial<IUser>>>([]);
    private getUsersWalletsSubscription!: Subscription;
    private updateUserWalletsSubscription!: Subscription;
  getAllUsersWallets(): void {
    this.getUsersWalletsSubscription = this.http
      .get(apiEndPoints.users.getUsersWallets)
      .pipe(
        tap((users) => {
          this.usersWallets.next(new SuccessResponse(users).data());
        })
      )
      .subscribe();
  }
  getUserWallets(userId: string) {
    return this.http
      .get(apiEndPoints.users.getUserWallets+`/${userId}`)
      .pipe(
          switchMap((users) => {
            return of(new SuccessResponse(users).data());
          })
      )
    }
    updateUserWallets(userId: string, data: Partial<IWallet>) {
       this.updateUserWalletsSubscription=this.http
        .put(apiEndPoints.users.getUserWallets+`/${userId}`, data).subscribe()
    }

  ngOnDestroy(): void {
      this.getUsersWalletsSubscription.unsubscribe();
      this.updateUserWalletsSubscription.unsubscribe();
  }
}
