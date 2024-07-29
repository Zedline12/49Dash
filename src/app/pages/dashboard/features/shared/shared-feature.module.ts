import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTitleComponent } from './feature-title/feature-title.component';

@NgModule({
  declarations: [FeatureTitleComponent],
  imports: [CommonModule],
  exports: [FeatureTitleComponent],
})
export class SharedFeatureModule {}
