import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';

import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MainCategoryComponent } from './child-components/main-category/main-category.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubCategoriesComponent } from './child-components/main-category/child-components/sub-categories/sub-categories.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [IndexComponent, MainCategoryComponent, SubCategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
  ],
})
export class CategoriesModule {}
