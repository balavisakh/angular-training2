import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import * as data from '../../../assets/users.json';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$")]);
  hide = true;
  role;
  userCredentials:any;
  constructor(private fb:FormBuilder, private router: Router) { }
  
  loginFormGroup = this.fb.group({
    email: this.email,
    password: this.password
  })
  ngOnInit(): void {
    console.log("email",this.loginFormGroup.value.email);
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return this.password.hasError("pattern") ? 'Password length must be minimum 6 digits and maximumum 12 digits and also should contain 1 Capital letter, 1 small letter and 1 special character' : '';
  }
  onSubmit() {
    if (this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched();
      return;
    }
    else {
    // console.log(this.loginFormGroup.value);
      for(let i =0; i< data.users.length; i++) {
        if (data.users[i].email === this.loginFormGroup.value.email && data.users[i].password === this.loginFormGroup.value.password) {
          console.log("equal");
          localStorage.setItem("username",data.users[i].username);
          localStorage.setItem("email",data.users[i].email);
          this.role = localStorage.setItem('role', '1');
          this.router.navigate(['search']);
          return;
        }
      }      
    console.log("not equal");
        localStorage.clear();
        alert("user name or password is wrong");
        return;
    }
  }
  }

