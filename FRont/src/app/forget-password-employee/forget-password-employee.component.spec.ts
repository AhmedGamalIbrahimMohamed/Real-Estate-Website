import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordEmployeeComponent } from './forget-password-employee.component';

describe('ForgetPasswordEmployeeComponent', () => {
  let component: ForgetPasswordEmployeeComponent;
  let fixture: ComponentFixture<ForgetPasswordEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
