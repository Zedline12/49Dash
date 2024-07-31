
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from 'app/core/models/social/post/IPost';
import { IUserCard } from 'app/core/models/user/IUserCard';
@Component({
  selector: 'app-posts-list-modal',
  templateUrl: './posts-list-modal.component.html',
  styleUrl: './posts-list-modal.component.scss'
})
export class PostsListModalComponent {
  posts!: IPost[];
  activeModal = inject(NgbActiveModal);
  
 
}
