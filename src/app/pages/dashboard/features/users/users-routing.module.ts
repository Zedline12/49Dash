import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const usersList = () => import('./users-list/users-list.module').then((m) => m.UsersListModule);
const userProfile = () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule);
const userWallets = () => import('./user-wallet/user-wallets.module').then((m) => m.UserWalletsModule);
const usersProfiles=()=>import('./users-profiles/users-profiles.module').then(m=>m.UsersProfilesModule)
const routes: Routes = [
  {
    path: '',
    loadChildren:usersList
  },
  {
    path: 'wallets',
    loadChildren:userWallets
  },
  {
    path: 'profiles',
    loadChildren:usersProfiles
  },
  {
    path: ':id',
    loadChildren:userProfile
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
