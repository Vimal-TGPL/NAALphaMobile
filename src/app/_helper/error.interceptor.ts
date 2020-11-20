import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry, delay, retryWhen, concatMap } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    currentUser:any;
  constructor(private toastController: ToastController ,private authService: AuthenticationService, private router: Router,private httpClient : HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var that = this;
    

    return next.handle(request).pipe(catchError(err => {
      // console.log(err);
      this.currentUser = this.authService.currentUserValue();
      // console.log(this.currentUser);
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        if (this.currentUser.remToken !== null) {
          this.authService.checkToken(request);
        }
      }else{
        if(err.error.message.length != 0){
          this.presentToast(err.error.message);
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
