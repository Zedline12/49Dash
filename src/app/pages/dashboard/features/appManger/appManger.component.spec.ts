import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMangerComponent } from './appMangercomponent';

describe('DynamicComponent', () => {
  let component: AppMangerComponent;
  let fixture: ComponentFixture<AppMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppMangerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
