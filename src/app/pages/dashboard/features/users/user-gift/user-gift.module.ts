import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGiftRoutingModule } from './user-gift-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    UserGiftRoutingModule
  ]
})
export class UserGiftModule { }
