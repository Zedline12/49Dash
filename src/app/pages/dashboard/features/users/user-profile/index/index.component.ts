import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'app/core/services/features/users.service';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersListModalComponent } from '../child-components/users-list-modal/users-list-modal.component';
import { IUserCard } from 'app/core/models/user/IUserCard';
import { PostsListModalComponent } from '../child-components/posts-list-modal/posts-list-modal.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.3s ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class IndexComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    public userServ: UserService,
    private _NgbModal: NgbModal
  ) {}
  public showAddionalData: boolean = false;
  public showWalletData: boolean = false;
  ngOnInit(): void {
    const userId = this.router.snapshot.paramMap.get('id');
    this.userServ.getUserProfile(userId!);
    this.userServ.userProfile.subscribe((user) => {
      console.log(user);
    });
  }
  openUsersList(type: { type: string }) {
    const modalRef = this._NgbModal.open(UsersListModalComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
    switch (type.type) {
      case 'friends':
        modalRef.componentInstance.users =
          this.userServ.userProfile.value.friends;
        break;
      case 'following':
        modalRef.componentInstance.users =
          this.userServ.userProfile.value.following;
        break;
      case 'followers':
        modalRef.componentInstance.users =
          this.userServ.userProfile.value.followers;
        break;
    }
    // modalRef.componentInstance.users = null;
  }
  openPostsList() {
    const modalRef = this._NgbModal.open(PostsListModalComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
    const tw_posts = this.userServ.userProfile.value.tw_posts.map(
      (post: any) =>
        (post = {
          ...post,
          user: { firstName: this.userServ.userProfile.value.user.firstName,lastName: this.userServ.userProfile.value.user.lastName },
        })
    );
    modalRef.componentInstance.posts = tw_posts;
  }
}
