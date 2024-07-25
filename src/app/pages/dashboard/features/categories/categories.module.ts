import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';

import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MainCategoryComponent } from './child-components/main-category/main-category.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubCategoriesComponent } from './child-components/main-category/child-components/sub-categories/sub-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMainCategoryComponent } from './child-components/create-main-category/create-main-category.component';
import { CreateSubCategoryComponent } from './child-components/main-category/child-components/create-sub-category/create-sub-category.component';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
@NgModule({
  declarations: [
    IndexComponent,
    MainCategoryComponent,
    SubCategoriesComponent,
    CreateMainCategoryComponent,
    CreateSubCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormField,
  ],
})
export class CategoriesModule {}
