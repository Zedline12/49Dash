import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubCateogry } from 'app/core/models/categories/ISubCategory';
import { CategoriesService } from 'app/core/services/features/categories.service';

@Component({
  selector: 'sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.scss',
})
export class SubCategoriesComponent {
  @Input() subCategories!: ISubCateogry[];
  show: boolean = false
  activeModal = inject(NgbActiveModal);
  constructor(private service: CategoriesService.SubCategoryService) {}
  onSubmit(value: any) {
    console.log(value);
    this.service.updateSubCategory(value);
  }
}
