import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const serverUrl: string = environment.serverUrl;
export const apiEndPoints = {
  auth: {
    login: `${serverUrl}/auth/login`,
    tokenValidation: `${serverUrl}/auth/check-token`,
    refreshToken: `${serverUrl}/auth/refresh/token`,
  },
  appManger: {
    getAllAppManger: `${serverUrl}/app-manager-dashboard`,
    updateAppManger: `${serverUrl}/app-manager-dashboard`,
  },
  users: {
    getAllUsers: `${serverUrl}/users`,
  },
  categories: {
    mainCategories: {
      createMainCategory:`${serverUrl}/categories/dashboard/main`,
      getallMainCategories: `${serverUrl}/categories/main/nested-subcategories`,
      updateMainCategory:`${serverUrl}/categories/main`
    },
    subCategories: {
      createSubCategory:`${serverUrl}/categories/dashboard/subcategories`,
      updateSubCategory: `${serverUrl}/categories/dashboard/subcategories`,
    },
  },
};

export const ResponseStructure = {
  ErrorMessage: function (this: HttpErrorResponse) {
    return this.error.error.message;
  },
};
