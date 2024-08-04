import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersProfilesRoutingModule } from './users-profiles-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'app/shared/shared.module';
import { SharedFeatureModule } from '../../shared/shared-feature.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    UsersProfilesRoutingModule,
    SharedModule,
    SharedFeatureModule,
  ],
})
export class UsersProfilesModule {}
