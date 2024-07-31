import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListModalComponent } from './users-list-modal.component';

describe('UsersListModalComponent', () => {
  let component: UsersListModalComponent;
  let fixture: ComponentFixture<UsersListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
