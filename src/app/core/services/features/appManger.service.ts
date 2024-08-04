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
  Storages: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  Cashbacks: BehaviorSubject<any> = new BehaviorSubject<any>([]);
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
  async getCashBacks() {
    await this.httpService.get(apiEndPoints.appManger.getCashback).pipe(tap((res) => {
       this.Cashbacks.next(new SuccessResponse(res).data());
     })).subscribe()
  }
  async getStorages() {
    await this.httpService.get(apiEndPoints.appManger.getStorages).pipe(tap((res) => {
       console.log(new SuccessResponse(res).data())
       this.Storages.next(new SuccessResponse(res).data()[0]);
     })).subscribe()
  }
  async updateStorages(body:any) {
    await this.httpService.post(apiEndPoints.appManger.getStorages,body).pipe(tap((res) => {
      this.tostr.success('Storage updated successfully');
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
