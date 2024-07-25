import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from '../../constants/api.constant';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { HttpService } from '../core/http.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AppMangerService implements OnDestroy {
  AppManger: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private tostr: ToastrService
  ) { }
  getAllAppMangerSubscription!:Subscription
  async getAllAppManger() {
    this.getAllAppMangerSubscription=await this.httpService
      .get(apiEndPoints.appManger.getAllAppManger).pipe(tap((res) => {
        this.AppManger.next(new SuccessResponse(res).data());
      })).subscribe()
  }

  async updateAppManger(appManger: any) {
    const AppManger = await this.httpService
      .put(apiEndPoints.appManger.updateAppManger, appManger)
      .subscribe((res: any) => {
        this.AppManger.next(new SuccessResponse(res).data());
        this.tostr.success('AppManger updated successfully');
        AppManger.unsubscribe();
      });
  }
  ngOnDestroy(): void {
    this.getAllAppMangerSubscription.unsubscribe()
  }
}
