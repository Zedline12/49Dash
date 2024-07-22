import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const serverUrl: string = environment.serverUrl;
export const apiEndPoints = {
  auth: {
    login: `${serverUrl}/auth/login`,
    tokenValidation: `${serverUrl}/auth/dashboard/token-validation`,
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
      getallMainCategories: `${serverUrl}/categories/main`,
    },
    subCategories: {
      getallSubCategories: `${serverUrl}/categories/subcategories`,
    },
  },
};

export const ResponseStructure = {
  ErrorMessage: function (this: HttpErrorResponse) {
    return this.error.error.message;
  },
};
