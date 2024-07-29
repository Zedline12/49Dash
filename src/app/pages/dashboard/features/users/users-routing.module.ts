import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const usersList = () => import('./users-list/users-list.module').then((m) => m.UsersListModule);
const userProfile= () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule);
const routes: Routes = [
  {
    path: '',
    loadChildren: usersList
  },
  {
    path: ':id',
    loadChildren:userProfile
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
