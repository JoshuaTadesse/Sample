import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubadminsComponent } from './create-subadmins.component';

describe('CreateSubadminsComponent', () => {
  let component: CreateSubadminsComponent;
  let fixture: ComponentFixture<CreateSubadminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSubadminsComponent]
    });
    fixture = TestBed.createComponent(CreateSubadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
