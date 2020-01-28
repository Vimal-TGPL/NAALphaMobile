import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Platform} from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UserView } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private CurrentUser:UserView = null;
  private api_url = environment.api_url;
  authenticationState = new BehaviorSubject(false);

  constructor( private http:HttpClient, private storage: Storage, private plt:Platform, private route:Router, private authService:AuthenticationService) { 
    // this.plt.ready().then(()=>{
      
      this.checkToken();
    //   this.storage.get('currentUser').then( res=>{
    //     this.CurrentUser = JSON.parse( res);
    //   // });
    // });
    
  }

  public currentUserValue() {
    let usr:any = '';
    this.storage.get('currentUser').then(res=>{
      console.log(res);
      var temp = JSON.parse(res);
      //console.log(temp);
      usr = temp;
      console.log(usr);
      
    })
      //console.log(this.user);
      //this.CurrentUser.token = usr.token;
      console.log(this.CurrentUser);
    return this.CurrentUser;
  }

  login(username:string, password:string, isRemember:string){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  return this.http.post<any>(this.api_url+'/users/authenticate',{username,password,isRemember},httpOptions)
  .pipe(map(user=>{
    if(user && user.token){
      if(user.isEmailVerified != "" && user.isEmailVerified == "Y"){
        this.storage.clear();
        console.log(user);
        this.storage.set('currentUser',JSON.stringify(user));
        this.authenticationState.next(true);
        this.CurrentUser = user;
      }
    }
    return user;
  }));
  }

  logout(){
   return this.storage.remove('currentUser').then(()=>{
      this.authenticationState.next(false);
    })
  }

  isAuthenticated(){
    //console.log(this.CurrentUser);
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get('currentUser').then(res=>{
      
      let user = JSON.parse(res);
      console.log(user);
      if(user && user.token){
        //console.log(res);
        this.CurrentUser = user;
        this.authenticationState.next(true);
      }else{
        this.authenticationState.next(false);
      }
    })
  }

  staySignedIn(){
    
  }

  forceLogout(){

  }

  mainlogout(){

  }

  
}
