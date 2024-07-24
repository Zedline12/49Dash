import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/features/categories.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
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
