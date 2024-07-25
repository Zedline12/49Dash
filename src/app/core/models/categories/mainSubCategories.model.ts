import { IMainCategory } from './mainCategory.model';
import { ISubCateogry} from './subCategory.model';
export interface IMainSubCategories extends IMainCategory {
  subCategories: ISubCateogry[];
  subCategoriesCount: number;
}
