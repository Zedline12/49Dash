import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { apiEndPoints } from '../../constants/api.constant';
import { HttpService } from '../core/http.service';
import { Injectable, OnDestroy } from '@angular/core';
import { SuccessResponse } from '../../classes/SuccessResponse';
import { mainCategoryModel } from 'app/core/models/categories/mainCategory.model';
import { ToastrService } from 'ngx-toastr';
import { subCateogryModel } from 'app/core/models/categories/subCategory.model';

export namespace CategoriesService {
  @Injectable({ providedIn: 'root' })
  export class MainCategoryService implements OnDestroy {
    constructor(private http: HttpService, private toster: ToastrService) {}
    public MainCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    //obseravbles
    private getAllCategoriesSubscription!: Subscription;
    private updateMainCategorySubscription!: Subscription;
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
    updateMainCategoryService(mainCategory: Partial<mainCategoryModel>) {
      this.updateMainCategorySubscription = this.http
        .put(
          apiEndPoints.categories.mainCategories.updateMainCategory +
            `/${mainCategory._id}`,
          mainCategory
        )
        .pipe(
          tap((res) => {
            this.toster.success('mainCategory updated successfully');
          })
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
      this.updateMainCategorySubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
  @Injectable({ providedIn: 'root' })
  export class SubCategoryService implements OnDestroy {
    constructor(private http: HttpService, private toster: ToastrService) {}
    public SubCategories: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private getAllCategoriesSubscription!: Subscription;
    private updateSubCategorySubscription!: Subscription;
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
    updateSubCategory(subCategory: Partial<subCateogryModel>) {
      const id = subCategory._id
      delete subCategory._id
      delete (subCategory as any).isHidden
      delete subCategory.nameCode
      this.updateSubCategorySubscription = this.http
        .put(
          apiEndPoints.categories.subCategories.updateSubCategory +
            `/${id}`,
          subCategory
        )
        .pipe(
          tap((res) => {
            this.toster.success('subCategory updated successfully');
          })
        )
        .subscribe();
    }
    unsubscribe() {
      this.getAllCategoriesSubscription.unsubscribe();
      this.updateSubCategorySubscription.unsubscribe();
    }
    ngOnDestroy(): void {
      this.unsubscribe();
    }
  }
}
