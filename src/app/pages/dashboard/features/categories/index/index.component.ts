import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/features/categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateMainCategoryComponent } from '../child-components/create-main-category/create-main-category.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  constructor(public mainserv: CategoriesService.MainCategoryService,private _NgbModal: NgbModal) {}
  ngOnInit(): void {
    this.mainserv.getAllMainCategoriesService();
    this.mainserv.MainCategories.subscribe((res) => {
      console.log(res);
    });
  }
  openCreateMainCategory() {
    const modalref = this._NgbModal.open(CreateMainCategoryComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
  }
  onSubmit(form: any) {
    console.log(form);
  }
}
