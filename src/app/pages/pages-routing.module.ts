import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
const auth = () => import('./auth/auth.module').then((m) => m.AuthModule);
const dashboard = () =>
  import('./dashboard/dashboard.module').then((m) => m.DashboardModule);
const routes: Routes = [
  { path: 'auth', loadChildren: auth },

  {
    path: '',
    loadChildren: dashboard,
     
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
