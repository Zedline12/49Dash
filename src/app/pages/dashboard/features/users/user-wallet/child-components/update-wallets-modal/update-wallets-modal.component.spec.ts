import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWalletsModalComponent } from './update-wallets-modal.component';

describe('UpdateWalletsModalComponent', () => {
  let component: UpdateWalletsModalComponent;
  let fixture: ComponentFixture<UpdateWalletsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateWalletsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWalletsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
