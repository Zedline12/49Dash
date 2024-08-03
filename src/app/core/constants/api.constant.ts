import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const serverUrl: string = environment.serverUrl;
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
    getUserProfile: `${serverUrl}/users`,
    getUsersWallets: `${serverUrl}/dashboard/users/usersWallets`,
    getUserWallets: `${serverUrl}/dashboard/users/userWallets`,
    updateUserWallets: `${serverUrl}/dashboard/users/userWallets`,
    updateRole:`${serverUrl}/dashboard/users/:id/role`
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
