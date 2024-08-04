import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMangerRoutingModule } from './app-manger-routing.module';
import { IndexComponent } from './index/index.component';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';
import { SharedFeatureModule } from '../shared/shared-feature.module';
import { StoragesComponent } from './storages/storages.component';
import { CashbackComponent } from './cashback/cashback.component';

@NgModule({
  declarations: [IndexComponent, StoragesComponent, CashbackComponent],
  imports: [CommonModule, AppMangerRoutingModule, CoreModule,SharedModule,SharedFeatureModule],
})
export class AppMangerModule {}
