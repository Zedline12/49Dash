import { Component } from '@angular/core';
import { CategoriesService } from '../../../../../../core/services/features/categories.service';

@Component({
  selector: 'sub-category',
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss',
})
export class SubCategoryComponent {
  constructor(public mainserv: CategoriesService.SubCategoryService) {}
  ngOnInit(): void {
    this.mainserv.getAllSubCategoriesService();
    this.mainserv.SubCategories.subscribe((res) => {
      console.log(res);
    });
  }
  onSubmit(form: any) {
    console.log(form);
  }
}
