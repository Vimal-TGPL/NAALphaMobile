import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Platform, ToastController} from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UserView, UserTrack, UserTrackDtls } from '../_models/user';
import { Device } from '@ionic-native/device/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx'
import { AppVersion } from '@ionic-native/app-version/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private CurrentUser:UserView = null;
  private api_url = environment.api_url;
  authenticationState = new BehaviorSubject(false);

  constructor(private platform: Platform, private appVersion:AppVersion, private userAgent: UserAgent, private device:Device, private toastController: ToastController, private http:HttpClient, private storage: Storage, private plt:Platform, private route:Router, private authService:AuthenticationService) { 
    // this.plt.ready().then(()=>{
      
    // setTimeout(() => {
      this.checkToken();
    // }, 100);
      
    //   this.storage.get('currentUser').then( res=>{
    //     this.CurrentUser = JSON.parse( res);
    //   // });
    // });
    
  }

  public currentUserValue() {
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
        this.CurrentUser = user;
        this.authenticationState.next(true);
        this.ProcUserTrack(user);
      }
    }
    return user;
  }));
  }

  logout(){
    var user:any;
    var userId;
    var remToken;
    this.storage.get('currentUser').then(res=>{
      user = JSON.parse(res);
      userId = user.userId;
      console.log(userId);
      remToken = user.remToken;
      console.log(remToken);
      console.log(user);
    })
   return this.storage.remove('currentUser').then(()=>{
     this.updateUserTrackLogOut(userId, remToken);
      this.authenticationState.next(false);
    })
  }

  isAuthenticated(){
    //console.log(this.CurrentUser);
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get('currentUser').then(res=>{
      
      let user:any = JSON.parse(res);
      console.log(user);
      if(user && user.token && user.remToken){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        console.log(user);
        var username:String = user.username;
        var remToken:String = user.remToken;
        console.log(username, remToken);
        this.http.post<any>(this.api_url+'/Users/AuthRem',{username,remToken},httpOptions).subscribe(userdata=>{
          this.CurrentUser = userdata;
          this.storage.set('currentUser',JSON.stringify(userdata));
          this.authenticationState.next(true);
          this.ProcUserTrack(userdata)
        },error=>{
          this.presentToast(error.error.message);
        })
      }else{
        this.authenticationState.next(false);
      }
    })
  }

  trackUser(userTracking: UserTrack){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.api_url+`/users/Usertrack`,userTracking,httpOptions).pipe(map(u=>{
      return u;
    }));
  }

  trackUserDetails(userTrackdtls:UserTrackDtls){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.api_url+`/users/UserTrackDtls`,userTrackdtls,httpOptions).pipe(map(u=>{
      return u;
    }));
  }

  ProcUserTrack(data){
    try{
      var objTrack = new UserTrack();

      objTrack.TrackingId = 0;
      objTrack.Userid = data.userId;
      objTrack.RequestedUrl = window.location.hostname;
      objTrack.RememberToken = data.remToken;
      objTrack.LogInTime = new Date();
      objTrack.LogOutTime = null;
      objTrack.Status = 'A';
      console.log(objTrack);
      setTimeout(() => {
      this.trackUser(objTrack).pipe().subscribe(trackData=>{
        console.log(trackData);
        var objtrackdtls = new UserTrackDtls();
        objtrackdtls.TrackingId = trackData['trackingId'];
        // objtrackdtls.TrackingId = null;
        objtrackdtls.Userid = objTrack.Userid;
        // this.userAgent.get().then(res=>{
          objtrackdtls.UserAgent = null;
        // });
        // if()
        objtrackdtls.OS = this.device.platform;
        objtrackdtls.OSVersion = this.device.version;
        objtrackdtls.browser = this.device.manufacturer;
        objtrackdtls.device = this.device.model;
        objtrackdtls.browserVersion = this.device.serial;
        objtrackdtls.IsMobile = this.platform.is('mobile') ? 1 : this.platform.is('iphone') ? 1 : 0;
        objtrackdtls.IsTablet = this.platform.is('ipad') ? 1 : this.platform.is('tablet') ? 1 : 0;
        objtrackdtls.IsDesktopDevice = this.device.isVirtual? 1 : 0;
        objtrackdtls.ScreenPixelsHeight = this.platform.height();
        objtrackdtls.ScreenPixelsWidth = this.platform.width();
        // objtrackdtls.UUID = this.device.uuid;
        // objtrackdtls.appVersion = this.appVersion.getVersionNumber();
        console.log(objtrackdtls);
        this.trackUserDetails(objtrackdtls).pipe().subscribe(data=>{
          console.log(data);
        })
      })
    }, 40);
    }catch(e){

    }
  }

  updateUserTrackLogOut(userid,remToken){
    let obj = new UserTrack();
    obj.Userid =parseInt(userid);
    obj.LogOutTime = new Date();
    obj.RememberToken = remToken;
    obj.RequestedUrl = window.location.hostname;
    obj.IPAddress = "";
    obj.LogInTime = new Date();
    obj.Status = "D";
    obj.TrackingId = 0;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(this.api_url + `/users/UpdateUsertrack`, obj, httpOptions)
      .subscribe(data => {
        console.log(data);
      }); 
  }

  async presentToast(val) {
    const toast = await this.toastController.create({
      message: val,
      duration: 5000
    });
    toast.present();
  }

  staySignedIn(){
    
  }

  forceLogout(){

  }

  mainlogout(){

  }

  
}
