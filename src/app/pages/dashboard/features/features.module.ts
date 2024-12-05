import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { SharedFeatureModule } from './shared/shared-feature.module';
import { CardsComponent } from '../index/components/cards/cards.component';
import { EarningReviewComponent } from '../index/components/earning-review/earning-review.component';
import { DataService } from 'app/core/services/features/data.service';
@NgModule({
  declarations: [IndexComponent, CardsComponent, EarningReviewComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    MatButtonModule,
    SharedModule,
    SharedFeatureModule,
  ],
  exports: [],
  providers: [DataService],
})
export class FeaturesModule {}
