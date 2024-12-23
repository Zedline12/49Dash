import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    AuthModule,
  ],
})
export class PagesModule {}
