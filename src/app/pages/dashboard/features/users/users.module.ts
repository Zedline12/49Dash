import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FeaturesModule } from '../features.module';
import { SharedFeatureModule } from '../shared/shared-feature.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersRoutingModule, SharedFeatureModule],
})
export class UsersModule {}
