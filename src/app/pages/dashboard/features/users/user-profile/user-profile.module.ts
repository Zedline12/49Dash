import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { IndexComponent } from './index/index.component';

import { SharedFeatureModule } from '../../shared/shared-feature.module';
import { UserService } from 'app/core/services/features/users.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, UserProfileRoutingModule, SharedFeatureModule],
  providers:[UserService]
})
export class UserProfileModule {}
