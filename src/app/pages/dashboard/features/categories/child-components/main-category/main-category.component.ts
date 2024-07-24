import { Component, Input, OnInit } from '@angular/core';
import { mainSubCategoriesModel } from 'app/core/models/categories/mainSubCategories.model';
import { CategoriesService } from 'app/core/services/features/categories.service';

@Component({
  selector: 'main-category',
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.scss',
})
export class MainCategoryComponent implements OnInit {
  @Input() mainCategory!: mainSubCategoriesModel;
  showSubCategories: boolean = true;
  constructor(private service:CategoriesService.MainCategoryService) {}
  ngOnInit(): void {
    console.log(this.mainCategory);
  }
  onSubmit(form:any) {
    form.value._id = this.mainCategory._id
    this.service.updateMainCategoryService(form.value)
  }
  checkIsHidden(value: any) {
    console.log(value);
  }
  toggleSubCategories() {
    this.showSubCategories = !this.showSubCategories;
  }
}
