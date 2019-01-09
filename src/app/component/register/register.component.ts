import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;                    
  private formSubmitAttempt: boolean;
  PNInputFocus:boolean;
  constructor(
    private fb: FormBuilder,         
    private authService: AuthService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({    
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      personalNumber: ['', Validators.required],
      countryId:['',Validators.required],
      maidenName:[''],
      isMale:['',Validators.required],
      birthDate:[''],      
      email: ['', Validators.required],
      phoneNumber:['',Validators.required],      
      password: ['', Validators.required]
    });    
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
      (this.registerForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  register() {
    let userRegister = new UserRegister();
    userRegister = this.registerForm.value;
    this.authService.register(userRegister); 
    
    this.formSubmitAttempt = true;             
  }

  pnInputFocus(){
    // alert('sadsadasd');
    // if(this.PNInputFocus==true){
    //   this.PNInputFocus = false;

    // }
    // else{
      this.PNInputFocus = true;

    // }
  }

  registerByPN(){
    // alert('asaaas')
    var data = this.authService.searchByPN(this.registerForm.value['personalNumber']);
    console.log(data);
  }
}
