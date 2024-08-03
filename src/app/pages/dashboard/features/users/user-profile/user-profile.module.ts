import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { IndexComponent } from './index/index.component';

import { SharedFeatureModule } from '../../shared/shared-feature.module';
import { UserService } from 'app/core/services/features/users/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDataComponent } from './child-components/user-data/user-data.component';
import { UsersListModalComponent } from './child-components/users-list-modal/users-list-modal.component';
import { UserSharedModule } from '../user-shared/user-shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { PostsListModalComponent } from './child-components/posts-list-modal/posts-list-modal.component';
import { PostsSharedModule } from '../../posts/posts-shared/posts-shared.module';

@NgModule({
  declarations: [
    IndexComponent,
    UserDataComponent,
    UsersListModalComponent,
    PostsListModalComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedFeatureModule,
    UserSharedModule,
    SharedModule,
    PostsSharedModule,
  ],
  providers: [UserService],
})
export class UserProfileModule {}
