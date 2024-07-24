import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AppMangerComponent } from './appManger/appMangercomponent';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [AppMangerComponent, IndexComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class FeaturesModule {}
