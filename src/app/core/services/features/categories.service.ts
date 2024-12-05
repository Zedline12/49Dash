import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { apiEndPoints } from '../../constants/api.constant';
import { HttpService } from '../core/http.service';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { IMainCategory } from 'app/core/models/categories/IMainCategory';
import { ToastrService } from 'ngx-toastr';
import { ISubCateogry } from 'app/core/models/categories/ISubCategory';

export namespace CategoriesService {
  @Injectable({ providedIn: 'root' })
  export class MainCategoryService implements OnDestroy {
    constructor(
      private http: HttpService,
      private toster: ToastrService,
    ) {}
    public MainCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    //obseravbles
    private getAllCategoriesSubscription!: Subscription;
    private updateMainCategorySubscription!: Subscription;
    private createMainSubCategorySubscription!: Subscription;

    createMainSubCategory(MainCategory: IMainCategory) {
      this.createMainSubCategorySubscription = this.http
        .post(
          apiEndPoints.categories.mainCategories.createMainCategory,
          MainCategory,
        )
        .pipe(
          tap((res) => {
            this.toster.success('MainCategory created successfully');
          }),
        )
        .subscribe();
    }
    getAllMainCategoriesService() {
      this.getAllCategoriesSubscription = this.http
        .get(apiEndPoints.categories.mainCategories.getallMainCategories)
        .pipe(
          tap((res) => {
            this.MainCategories.next(
              new SuccessResponse(res).data().mainCategories,
            );
          }),
        )
        .subscribe();
    }
    updateMainCategoryService(mainCategory: Partial<IMainCategory>) {
      this.updateMainCategorySubscription = this.http
        .put(
          apiEndPoints.categories.mainCategories.updateMainCategory +
            `/${mainCategory._id}`,
          mainCategory,
        )
        .pipe(
          tap((res) => {
            this.toster.success('mainCategory updated successfully');
          }),
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
      this.updateMainCategorySubscription.unsubscribe();
      this.createMainSubCategorySubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
  @Injectable({ providedIn: 'root' })
  export class SubCategoryService implements OnDestroy {
    constructor(
      private http: HttpService,
      private toster: ToastrService,
    ) {}
    public SubCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private getAllCategoriesSubscription!: Subscription;
    private updateSubCategorySubscription!: Subscription;
    private createSubCategorySubscription!: Subscription;

    createSubCategory(subCategory: ISubCateogry) {
      this.createSubCategorySubscription = this.http
        .post(
          apiEndPoints.categories.subCategories.createSubCategory,
          subCategory,
        )
        .pipe(
          tap((res) => {
            this.toster.success('subCategory created successfully');
          }),
        )
        .subscribe();
    }
    updateSubCategory(subCategory: Partial<ISubCateogry>) {
      const id = subCategory._id;
      this.updateSubCategorySubscription = this.http
        .put(
          apiEndPoints.categories.subCategories.updateSubCategory + `/${id}`,
          subCategory,
        )
        .pipe(
          tap((res) => {
            this.toster.success('subCategory updated successfully');
          }),
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
      this.updateSubCategorySubscription.unsubscribe();
      this.createSubCategorySubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
}
