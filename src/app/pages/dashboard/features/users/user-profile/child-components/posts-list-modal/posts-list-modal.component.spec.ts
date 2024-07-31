import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListModalComponent } from './posts-list-modal.component';

describe('PostsListModalComponent', () => {
  let component: PostsListModalComponent;
  let fixture: ComponentFixture<PostsListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsListModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
