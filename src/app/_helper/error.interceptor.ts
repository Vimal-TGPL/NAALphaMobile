
/* Error Interceptor */

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    currentUser:any;
  constructor(private toastController: ToastController ,private authService: AuthenticationService, private router: Router,private httpClient : HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(catchError(err => {    // Catch Error and Handle
      this.currentUser = this.authService.currentUserValue();
      if (err.status === 401) {                             // If Error Code is 401, then check authentication and relogin
        if (this.currentUser.remToken !== null) {
          this.authService.checkToken(request);
        }
      }else{
        if(err.error.message.length != 0){
          this.presentToast(err.error.message);             // If Error code is not 401, the show error message
        }
      }
      const error = err.message || err.statusText;
      return throwError(error);
    }))
}

async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 3000,
    cssClass: 'center'
  });
  toast.present();
}
}
