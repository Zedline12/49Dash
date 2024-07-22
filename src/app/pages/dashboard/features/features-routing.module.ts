import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMangerComponent } from './appManger/appMangercomponent';
import { IndexComponent } from './index/index.component';
const users = () => import('./users/users.module').then((m) => m.UsersModule);
const categories = () =>
  import('./categories/categories.module').then((m) => m.CategoriesModule);
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'appManger',
    component: AppMangerComponent,
  },
  {
    path: 'users',
    loadChildren: users,
  },
  {
    path: 'categories',
    loadChildren: categories,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
