import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'app/core/services/features/categories.service';

@Component({
  selector: 'app-create-main-category',
  templateUrl: './create-main-category.component.html',
  styleUrl: './create-main-category.component.scss',
})
export class CreateMainCategoryComponent {
  mainCategoryForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:CategoriesService.MainCategoryService) {
    this.mainCategoryForm = fb.group({
      nameEn: ['', Validators.required],
      nameAr: ['', Validators.required],
      nameCode: ['', Validators.required],
      isHidden: [false, Validators.required],
      banner: ['in future'],
      cover: ['in future'],
      index: [null, Validators.required],
    });
  }
  onSubmit() {
    if (this.mainCategoryForm.valid) {
      this.mainCategoryForm.value.cover = "cover"
     this.mainCategoryForm.value.banner = "banner"
      this.service.createMainSubCategory(this.mainCategoryForm.value)
    }
    else {
      this.mainCategoryForm.markAllAsTouched();
    }
  }
  activeModal = inject(NgbActiveModal);
}
