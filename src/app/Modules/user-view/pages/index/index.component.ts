import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModelComponent} from '../../../../components/model-popUp/model/model.component'
import { ToastrService } from 'ngx-toastr';
import {LoginServiceService} from '../../../../Services/_login/-login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/_auth/-auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ForgetPasswordForm!:FormGroup ;
  loginForm!:FormGroup;
  submitted = false;
forgetUserEmail:any={};
loginFormdata:any={};
  // registerUser: registerUserModel;
  loading = false;




  constructor (private auth:AuthService,private formBuilder:FormBuilder,private router:Router,private toastr: ToastrService,private loginApi:LoginServiceService) {

   }

  ngOnInit(): void {

    this.ForgetPasswordForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]]
    })

    this.loginForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue],

    })

    if (this.auth.isLoggedIn()) {
      this.toastr.info('User is Already Login','Redirecting',  {
        timeOut: 3000,
      })
      this.router.navigate(['userscreen']);
    }


  }
   // convenience getter for easy access to form fields
get f() { return this.ForgetPasswordForm.controls; }
get f2() { return this.loginForm.controls; }


loginUser(){
  this.loginApi.LoginUser(this.loginFormdata)
  .subscribe({
    next: (res) => {
      localStorage.setItem('token',res.token)
      localStorage.setItem('fname',res.fname)
        this.toastr.success('User login successfully');
        this.router.navigate(['/userscreen'])

    },
    error: error => {
        this.toastr.error(`Invalid Credentials.\n ${error}`);
        this.loading = false;
    }
});
}





  onSubmit() {
    this.submitted=true;
    this.loading=false;
    if (this.ForgetPasswordForm.invalid) {
      console.log("error");
      this.showerror();
      this.loading=false;
      return;
  } else{
    this.showsuccess();
this.loading=true;
    console.log("form is submitted");
    console.log( `form value enter are ${this.loginFormdata}`);
  }
  }





  onSubmit2() {
    this.submitted = true;
console.log("poopopop")
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return ;
    }
    else {
      this.loginUser ();
      console.log(this.loginForm.value)
    }
  }

  showerror() {
    this.toastr.error("",'Field Is Required,Please Fill it!',{
      progressBar:true,
      timeOut:2000
    });
  }
  showsuccess() {
    this.toastr.success("",'An Email with reset password Link is send.Kindly check your Email',{
      progressBar:true,
      timeOut:2000
    });
  }
}
