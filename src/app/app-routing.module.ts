import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const pages = () => import('./pages/pages.module').then((m) => m.PagesModule);
const routes: Routes = [
  {
    path: '',
    loadChildren:pages
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}