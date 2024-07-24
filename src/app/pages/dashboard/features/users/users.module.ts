import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { IndexComponent } from './index/index.component';
import { UserCardComponent } from './child-components/user-card/user-card.component';
import { UserService } from '../../../../core/services/features/users.service';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [IndexComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  providers: [UserService],
})
export class UsersModule {}
