import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMainSubCategories } from 'app/core/models/categories/mainSubCategories.model';
import { CategoriesService } from 'app/core/services/features/categories.service';
import { ModalService } from 'app/core/services/features/modal.service';
import { SubCategoriesComponent } from './child-components/sub-categories/sub-categories.component';
import { CreateSubCategoryComponent } from './child-components/create-sub-category/create-sub-category.component';

@Component({
  selector: 'main-category',
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.scss',
})
export class MainCategoryComponent implements OnInit {
  @Input() mainCategory!: IMainSubCategories;
  showSubCategories: boolean = false;
  constructor(
    private service: CategoriesService.MainCategoryService,
    public modalServ: ModalService,
    private _NgbModal: NgbModal
  ) {}

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    form.value._id = this.mainCategory._id;
    this.service.updateMainCategoryService(form.value);
  }
  checkIsHidden(value: any) {
  }
  openSubCategories() {
    const modalref = this._NgbModal.open(SubCategoriesComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
    modalref.componentInstance.subCategories = this.mainCategory.subCategories;
  }
  addSubCategory() {
    const modalref = this._NgbModal.open(CreateSubCategoryComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
    modalref.componentInstance.mainCategoryId = this.mainCategory._id;
  }
}
