import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../../../core/services/features/categories.service';

@Component({
  selector: 'main-category',
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.scss',
})
export class MainCategoryComponent implements OnInit {
  constructor(public mainserv: CategoriesService.MainCategoryService) {}
  ngOnInit(): void {
    this.mainserv.getAllMainCategoriesService();
    this.mainserv.MainCategories.subscribe((res) => {
      console.log(res);
    });
  }
  onSubmit(form: any) {
    console.log(form);
  }
}
