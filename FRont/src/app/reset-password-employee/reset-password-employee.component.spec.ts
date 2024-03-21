import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordEmployeeComponent } from './reset-password-employee.component';

describe('ResetPasswordEmployeeComponent', () => {
  let component: ResetPasswordEmployeeComponent;
  let fixture: ComponentFixture<ResetPasswordEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
