import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySubAdminsComponent } from './company-sub-admins.component';

describe('CompanySubAdminsComponent', () => {
  let component: CompanySubAdminsComponent;
  let fixture: ComponentFixture<CompanySubAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySubAdminsComponent]
    });
    fixture = TestBed.createComponent(CompanySubAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
