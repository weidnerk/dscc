import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  handleError(error: HttpErrorResponse) {
    console.log("lalalalalalalala");
    return throwError(error);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      // https://spring.io/guides/tutorials/spring-security-and-angular-js/
      // https://stackoverflow.com/questions/49097716/how-to-disable-browser-basic-authentication-popup-angular-5-spring-security
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr).pipe(catchError(err => {
      if (err.status === 401) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
