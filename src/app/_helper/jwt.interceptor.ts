import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserView } from '../_models/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    currentUser:any;
    
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
         

         request = request.clone({
             setHeaders:{
                'Content-Type': 'application/json',
             }
         });

         
         if(this.currentUser && this.currentUser.token){
             console.log(this.currentUser);
             //console.log("adding bearer");
             request = request.clone({
                 setHeaders:{
                    Authorization: `Bearer ${this.currentUser.token}`
                 }
             })
         }
         return next.handle(request);
     }

    constructor(public http: HttpClient, private storage:Storage, private authService: AuthenticationService){
    this.currentUser = this.authService.currentUserValue();
    }

}