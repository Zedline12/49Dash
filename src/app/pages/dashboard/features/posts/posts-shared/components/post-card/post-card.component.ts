import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'app/core/models/social/post/IPost';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ 'top':'60%', opacity: 0 }),
        animate('0.5s ease-out', style({ top:'*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ 'top':"60%", opacity: 0 })),
      ]),
    ]),
  ],
})
export class PostCardComponent implements OnInit {
  @Input() post!: IPost;
  showReacts: boolean = false;
  ngOnInit(): void {
    console.log(this.post);
  }
}
