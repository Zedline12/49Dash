import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { apiEndPoints } from '../../constants/api.constant';
import { HttpService } from '../core/http.service';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';

export namespace CategoriesService {
  @Injectable({ providedIn: 'root' })
  export class MainCategoryService implements OnDestroy {
    constructor(private http: HttpService) {}
    public MainCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private mainCategories: any[] = [];
    //obseravbles
    private getAllCategoriesSubscription!: Subscription;
    getAllMainCategoriesService() {
      this.getAllCategoriesSubscription = this.http
        .get(apiEndPoints.categories.mainCategories.getallMainCategories)
        .pipe(
          tap((res) => {
            this.MainCategories.next(
              new SuccessResponse(res).data().mainCategories
            );
          })
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
  @Injectable({ providedIn: 'root' })
  export class SubCategoryService implements OnDestroy {
    constructor(private http: HttpService) {}
    public SubCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private getAllCategoriesSubscription!: Subscription;
    getAllSubCategoriesService(): void {
      this.getAllCategoriesSubscription = this.http
        .get(apiEndPoints.categories.subCategories.getallSubCategories)
        .pipe(
          tap((res) => {
            this.SubCategories.next(
              new SuccessResponse(res).data().mainCategories
            );
          })
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
}
