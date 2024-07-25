import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMainCategoryComponent } from './create-main-category.component';

describe('CreateMainCategoryComponent', () => {
  let component: CreateMainCategoryComponent;
  let fixture: ComponentFixture<CreateMainCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMainCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
