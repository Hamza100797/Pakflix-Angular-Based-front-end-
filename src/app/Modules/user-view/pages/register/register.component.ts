import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../../../../_helpers/must-match-validator'
 import {RegisterServiceService} from '../../../../Services/_register/-registration.service'
 import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
 import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !:FormGroup //Name of Form
  submitted = false;
  registerUserData:any={};
  // registerUser: registerUserModel;
  loading = false;

  constructor(private formBuilder:FormBuilder,private register_API:RegisterServiceService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required,Validators.minLength(2)]],
      lname: ['', [Validators.required,Validators.minLength(2)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
      address:['',[Validators.required,Validators.minLength(8)]],
      state: ['', Validators.required,Validators.minLength(2)],
      city: ['', Validators.required,Validators.minLength(2)],
      phonenum: ['', Validators.required,Validators.minLength(11)],
    },
    {
      validator: MustMatch('password', 'cpassword')
  })
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


private registration () {
  this.register_API.RegisterUser(this.registerForm.value)
      .subscribe({
          next: () => {
              this.toastr.success('User added successfully',);
          },
          error: error => {
              this.toastr.error(error);
              this.loading = false;
          }
      });
}



  //OnSubmit of registor form
  onSubmit() {
    this.submitted = true;
console.log("poopopop")
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else {
      this.registration ();

      console.log(this.registerForm.value)
    }

}
}
