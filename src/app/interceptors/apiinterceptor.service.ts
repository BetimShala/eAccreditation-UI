import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(private router: Router) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // localStorage.setItem('user_token','test'); //testing


    var userToken = localStorage.getItem('user_token');
    var apiUrl = 'https://localhost:44306';
    request = request.clone({
      url: apiUrl + `${request.url}`,
    });
    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
      });

    }
    else {
      if (!request.url.includes('arc')) {
        this.router.navigateByUrl('/login');
      }
      else {
        //stay there....
      }
    }






    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403 || err.status === 401) {

            this.router.navigateByUrl('/login');

          }
        }
      })
    );
  }

}