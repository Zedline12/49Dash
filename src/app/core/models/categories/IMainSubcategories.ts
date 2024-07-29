import { IMainCategory } from './IMainCategory';
import { ISubCateogry} from './ISubCategory';
export interface IMainSubCategories extends IMainCategory {
  subCategories: ISubCateogry[];
  subCategoriesCount: number;
}
