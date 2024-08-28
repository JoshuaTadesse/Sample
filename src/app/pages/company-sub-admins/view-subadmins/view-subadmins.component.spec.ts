import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubadminsComponent } from './view-subadmins.component';

describe('ViewSubadminsComponent', () => {
  let component: ViewSubadminsComponent;
  let fixture: ComponentFixture<ViewSubadminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubadminsComponent]
    });
    fixture = TestBed.createComponent(ViewSubadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
