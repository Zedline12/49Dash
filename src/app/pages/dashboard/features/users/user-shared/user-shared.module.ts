import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserCardComponent],
})
export class UserSharedModule {}
