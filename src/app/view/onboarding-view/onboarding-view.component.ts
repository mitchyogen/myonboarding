import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { GFIForm } from '../../model/gfi-form.model';
import { FileConfig } from 'config';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-onboarding-view',
  templateUrl: './onboarding-view.component.html',
  styleUrls: ['./onboarding-view.component.scss']
})
export class OnboardingViewComponent implements OnInit {
  gfiForm: GFIForm[];
  isValid: boolean = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);

  requiredFormControl = new FormControl('', [
    Validators.required,
  ]);

  dobFormControl = new FormControl('', [
    Validators.required,
  ]);

  nationalityFormControl = new FormControl('', [
    Validators.required,
  ]);

  contactFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  visaStatusFormControl = new FormControl('', [
    Validators.required,
  ]);

  profileFormControl = new FormControl('', [
    Validators.required,
  ]);

  skillsFormControl = new FormControl('', [
    Validators.required,
  ]);

  yearsOfExpFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  currentEmpFormControl = new FormControl('', [
    Validators.required,
  ]);

  expectedSalaryFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  currentSalaryFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  noticePeriodFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  numbersOnlyFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {

  	this.gfiForm = FileConfig;


  }

  submitInfo(): void {
  	console.log('submit btn clicked');
  	this.isValid = false;
  }

}
