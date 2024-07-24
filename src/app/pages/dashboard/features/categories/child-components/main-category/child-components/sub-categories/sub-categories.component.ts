import { Component, Input } from '@angular/core';
import { subCateogryModel } from 'app/core/models/categories/subCategory.model';
import { CategoriesService } from 'app/core/services/features/categories.service';

@Component({
  selector: 'sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.scss',
})
export class SubCategoriesComponent {
  @Input() subCategories!: subCateogryModel[];
  constructor(private service: CategoriesService.SubCategoryService) {}
  onSubmit(value: any) {
    console.log(value);
    this.service.updateSubCategory(value);
  }
}
