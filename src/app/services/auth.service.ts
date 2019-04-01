import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login.model';
import { Observable, Subject } from 'rxjs';
import { UserRegister } from '../models/user-register.model';
import { UserList } from '../models/user-list.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: UserLogin) {
    return this.http.post('/api/authentication/authenticate',
      user,
      {
        responseType: 'text'
      }).subscribe(data => {

        if (data != 'authentication failed') {
          localStorage.setItem('user_token', data.toString());
          // var userToken = localStorage.getItem('user_token');
          // let tokenInfo = this.getDecodedAccessToken(userToken);
          // localStorage.setItem('unique_name', tokenInfo.unique_name);
          this.setRole(data.toString());
          this.router.navigateByUrl('/');
        }
        else {
          this.router.navigateByUrl('/');
        }
      })
  }

  register(user: UserRegister) {
    console.log(user);
    return this.http.post('/api/authentication/register',
      user,
      {
        responseType: 'json'
      }).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('');
        }
        else {
          this.router.navigateByUrl('/login');
        }
      })

  }

  getAcademicStaff(){
    return this.http.get<UserList[]>('/api/authentication/academic-staff')
  }

  get isLoggedIn(): Observable<boolean> {
    var subject = new Subject<boolean>();
    if (localStorage.getItem('user_token')) {
      // logged in so return true
      subject.next(true);
    }
    else {
      subject.next(false);
    }
    return subject.asObservable();
  }

  searchByPN(personalNumber: string){
    console.log(personalNumber);
      return this.http.post('/api/authentication/arc/personalNumber/'+personalNumber,
      {
       responseType:'json' 
      });
  }
  setRole(token: string) {
    let jwtToken = token;
    let jwtData = jwtToken.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    localStorage.setItem('role', decodedJwtData.role);
  }
  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }
}
