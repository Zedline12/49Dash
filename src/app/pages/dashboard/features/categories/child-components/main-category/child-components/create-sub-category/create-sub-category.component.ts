import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubCateogry } from 'app/core/models/categories/ISubCategory';
import { CategoriesService } from 'app/core/services/features/categories.service';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrl: './create-sub-category.component.scss',
})
export class CreateSubCategoryComponent {
  @Input() mainCategoryId!: string;
  activeModal = inject(NgbActiveModal);
  subCategoryForm!: FormGroup;
  bool = false;
  enableChatAndCallButton = ['freeAll', 'oneSubscription', 'twoSubscriptions'];
  
  constructor(private fb: FormBuilder,private service:CategoriesService.SubCategoryService) {
    this.subCategoryForm = this.fb.group({
      nameEn: ['', Validators.required],
      nameAr: ['', Validators.required],
      nameCode: ['', Validators.required],
      index: [null, Validators.required],
      is_hidden: [false, Validators.required],
      daily_price: [null, Validators.required],
      portion: [null, Validators.required],
      provider_portion: [null, Validators.required],
      payment_factor: [null, Validators.required],
      gross_money: [null, Validators.required],
      over_head_factor: [null, Validators.required],
      enableChatAndCallButton: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.subCategoryForm.valid) {
      this.subCategoryForm.value.parent = this.mainCategoryId
      this.subCategoryForm.value.picture="picture"
      this.service.createSubCategory(this.subCategoryForm.value)
    }
    else {
      this.subCategoryForm.markAllAsTouched(); 
    }
  }
}
