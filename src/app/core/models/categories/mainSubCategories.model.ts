import { mainCategoryModel } from './mainCategory.model';
import { subCateogryModel } from './subCategory.model';
export interface mainSubCategoriesModel extends mainCategoryModel {
  subCategories: subCateogryModel[];
  subCategoriesCount: number;
}
