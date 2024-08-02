import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWalletsRoutingModule } from './user-wallets-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    UserWalletsRoutingModule,SharedModule
  ]
})
export class UserWalletsModule { }
