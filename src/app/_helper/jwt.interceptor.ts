 /* ---JSON Web Token Interceptor---
 
 Capture the Http request and add the Bearer Token with header*/

import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    currentUser:any;
    
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
         
         request = request.clone({
             setHeaders:{
                'Content-Type': 'application/json',
             }
         });

         this.getCurrentUser();
         if(this.currentUser && this.currentUser.token){
             request = request.clone({
                 setHeaders:{
                    Authorization: `Bearer ${this.currentUser.token}`       //Bearer Token
                 }
             })
         }
         return next.handle(request);

     }

    constructor(private toast: Toast,public alertController: AlertController,public toastController : ToastController ,public http: HttpClient, private storage:Storage, private authService: AuthenticationService){
    this.currentUser = this.authService.currentUserValue();             // Get the User Details
    }

    getCurrentUser()
    {
        this.currentUser = this.authService.currentUserValue();         // Get the User Details
    }
}