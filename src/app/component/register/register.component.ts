import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register.model';
import { debug } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  private formSubmitAttempt: boolean;
  PNInputFocus: boolean;
  personalNumber: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      personalNumber: ['', Validators.required],
      countryId: ['', Validators.required],
      maidenName: [''],
      isMale: ['', Validators.required],
      birthDate: [''],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
    let pn = this.route.snapshot.paramMap.get('id')
    debugger
    if (pn !== null) {
      this.authService.searchByPN(pn).subscribe(data => {
        this.bindValues(data);

      });
    }
  }

  bindValues(data: any) {
    for (var key in data) {
      if (this.registerForm.controls[key]) {
        this.registerForm.controls[key].patchValue(data[key]);
      }
      if (key === 'gender') {
        let isMale = data[key] == true ? 1 : 0;
        this.registerForm.controls['isMale'].patchValue(isMale)
      }
      if (key === 'birthDate') {
        let birthDate = new Date(data[key]).toISOString().split('T')[0];
        console.log(birthDate)
        this.registerForm.controls[key].patchValue(birthDate)
      }
    }
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

  bindPN(event: any) {
    this.personalNumber = event.currentTarget.value
    this.authService.searchByPN(this.personalNumber).subscribe(data => {
      this.bindValues(data);

    });
  }
  pnInputFocus() {
    // alert('sadsadasd');
    // if(this.PNInputFocus==true){
    //   this.PNInputFocus = false;

    // }
    // else{
    this.PNInputFocus = true;

    // }
  }

  registerByPN() {
    // var data = this.authService.searchByPN(this.registerForm.value['personalNumber']);
    this.router.navigateByUrl(`/arc-register/${this.registerForm.value['personalNumber']}`)

  }
}
