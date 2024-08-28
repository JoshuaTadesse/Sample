import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubadminsComponent } from './edit-subadmins.component';

describe('EditSubadminsComponent', () => {
  let component: EditSubadminsComponent;
  let fixture: ComponentFixture<EditSubadminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSubadminsComponent]
    });
    fixture = TestBed.createComponent(EditSubadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
