import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-list-routing.module';
import { IndexComponent } from './index/index.component';
import { UserService } from '../../../../../core/services/features/users.service';
import { SharedModule } from '../../../../../shared/shared.module';
import { UserSharedModule } from '../user-shared/user-shared.module';
import { SharedFeatureModule } from '../../shared/shared-feature.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule,UserSharedModule,SharedFeatureModule],
  providers: [UserService],
})
export class UsersListModule {}
