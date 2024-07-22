import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { MainCategoryComponent } from './child-components/main-category/main-category.component';
import { SubCategoryComponent } from './child-components/sub-category/sub-category.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../../../shared/module/shared/shared.module';

@NgModule({
  declarations: [MainCategoryComponent, SubCategoryComponent, IndexComponent],
  imports: [CommonModule, CategoriesRoutingModule, SharedModule],
})
export class CategoriesModule {}
