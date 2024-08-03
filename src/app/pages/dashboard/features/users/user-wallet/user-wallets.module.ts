import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWalletsRoutingModule } from './user-wallets-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'app/shared/shared.module';
import { UpdateWalletsModalComponent } from './child-components/update-wallets-modal/update-wallets-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    UpdateWalletsModalComponent
  ],
  imports: [
    CommonModule,
    UserWalletsRoutingModule,SharedModule,ReactiveFormsModule
  ]
})
export class UserWalletsModule { }
