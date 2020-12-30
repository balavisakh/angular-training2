import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MyAccountSnakbarComponent } from '../my-account-snakbar/my-account-snakbar.component';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  firstName = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z\\s]*")])
  lastName = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z\\s]*")])
  dateOfBirth = new FormControl('', [Validators.required])
  Address = new FormControl('', [Validators.required])
  mobile = new FormControl('+91', [Validators.required, Validators.minLength(13)])
  country = new FormControl('', [Validators.required])

  constructor(private dateAdapter: DateAdapter<Date>, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  myAccountFormGroup = this.fb.group({
    firstName: this.firstName,
    lastName: this.lastName,
    dateOfBirth: this.dateOfBirth,
    Address: this.Address,
    mobile: this.mobile,
    country: this.country
  })
  ngOnInit(): void {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
}

getErrorFirstNameMessage() {
  if(this.firstName.hasError('required')) {
    return 'Enter first Name'
  }
  return 'Only allow alphabets'
}

getErrorLastNameMessage() {
  if(this.lastName.hasError('required')) {
    return 'Enter last Name'
  }
  return 'Only allow alphabets'
}

getErrorMobileMessage() {
  if(this.mobile.hasError('required')) {
    return 'Enter mobile number'
  }
  return 'Your given mobile number is not valid'
}

getErrorCountryMessage() {
  if(this.country.hasError('required')) {
    return 'Enter country name'
  }
}

onSubmit(): void {
  if(this.myAccountFormGroup.invalid) {
    this.myAccountFormGroup.markAllAsTouched();
    return;
  }
  this._snackBar.openFromComponent(MyAccountSnakbarComponent,{data:{myAccountData:this.myAccountFormGroup.value},duration: 1000})
  console.log(this.myAccountFormGroup.value);
 }
}
