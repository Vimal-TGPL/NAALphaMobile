import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
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
                    Authorization: `Bearer ${this.currentUser.token}`
                 }
             })
             console.log(this.currentUser.token);
         }
         return next.handle(request);
        //  .pipe(
        //      catchError(this.handleError)
        //  );

     }

    constructor(private toast: Toast,public alertController: AlertController,public toastController : ToastController ,public http: HttpClient, private storage:Storage, private authService: AuthenticationService){
    this.currentUser = this.authService.currentUserValue();
    }

    //  handleError(error: HttpErrorResponse){    
    //     if(error.status === 401){
    //         this.getCurrentUser();
    //         console.log(this.currentUser);
    //     //  this.storage.get('currentUser').then(res=>{
    //     //     let user:any = JSON.parse(res);
    //     //     if(user && user.token && user.remToken){
                
    //     //             //  if(this.currentUser.remToken !== null){
    //     //             //     this.authService.checkToken();
    //     //             //  }
    //     //             console.log(user);
    //     //     }
    //     //  });
    //     }
    //     return throwError(error);
    // }

    getCurrentUser()
    {
        this.currentUser = this.authService.currentUserValue();
    }
}