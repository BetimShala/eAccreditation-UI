import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;                    
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,         
    private authService: AuthService,
    private router: Router 
  ) {
  //   if (this.authService.isLoggedIn.subscribe(loggedIn=>{
  //     return loggedIn;
  //   })) { 
  //     this.router.navigate(['/']);
  // }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({    
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe:[false]
    });    
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  login() {
    if (this.loginForm.valid) {
      let userLogin = new UserLogin();
      userLogin = this.loginForm.value;
      this.authService.login(userLogin); 
    }
    this.formSubmitAttempt = true;             
  }

}
