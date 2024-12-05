import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
const courses= () =>
  import('./courses/courses.module').then((m) => m.CoursesModule);
const transactions= () =>
  import('./transactions/transactions.module').then((m) => m.TransactionsModule);
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'courses',
    loadChildren: courses,
  },
  {
    path: 'transactions',
    loadChildren: transactions
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
