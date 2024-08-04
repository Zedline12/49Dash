import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitonsControlRoutingModule } from './competitons-control-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    CompetitonsControlRoutingModule
  ]
})
export class CompetitonsControlModule { }
