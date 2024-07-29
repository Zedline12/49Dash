import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AppMangerComponent } from './appManger/appMangercomponent';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { SharedFeatureModule } from './shared/shared-feature.module';

@NgModule({
  declarations: [AppMangerComponent, IndexComponent],
  imports: [CommonModule, FeaturesRoutingModule, FormsModule, MatButtonModule,SharedModule,SharedFeatureModule],
  exports: [],
})
export class FeaturesModule {}
