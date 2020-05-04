import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message if the form is invalid', () => {
    spyOn(component,'onSubmit').and.callThrough();
    const submitButton = fixture.debugElement.nativeElement.querySelector('#submit-button');
    submitButton.click();
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.nativeElement.querySelector('#email-required-msg').textContent;
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.signUpForm.status).toBe('INVALID');
    expect(errorMessage).toBe('Email cannot be empty');
  });

  it('should not show error message if the form is valid', () => {
    spyOn(component,'onSubmit').and.callThrough();
    component.signUpForm.controls['email'].setValue('test@gmail.com');
    component.signUpForm.controls['password'].setValue('123');
    component.signUpForm.controls['cpassword'].setValue('123');
    component.signUpForm.controls['mem_name'].setValue('Raj');
    component.signUpForm.controls['gender'].setValue('Male');
    component.signUpForm.controls['contactnum'].setValue('9393939393');
    const submitButton = fixture.debugElement.nativeElement.querySelector('#submit-button');
    submitButton.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.signUpForm.status).toBe('VALID');
  });
});

