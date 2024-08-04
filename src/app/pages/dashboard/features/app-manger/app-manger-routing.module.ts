import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StoragesComponent } from './storages/storages.component';
import { CashbackComponent } from './cashback/cashback.component';

const routes: Routes = [
  {
    path: '',
    component:IndexComponent
  },
  {
    path: 'storages',
    component:StoragesComponent
  },
  {
    path: 'cashback',
    component:CashbackComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMangerRoutingModule { }
