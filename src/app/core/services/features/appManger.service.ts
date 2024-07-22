import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from '../../constants/api.constant';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { HttpService } from '../core/http.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AppMangerService {
  AppManger: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private tostr: ToastrService
  ) {}
  async getAllAppManger() {
    const AppManger = await this.httpService
      .get(apiEndPoints.appManger.getAllAppManger)
      .subscribe((res: any) => {
        this.AppManger.next(new SuccessResponse(res).data());
        AppManger.unsubscribe();
      });
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
}
