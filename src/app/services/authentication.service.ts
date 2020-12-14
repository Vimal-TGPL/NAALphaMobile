import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler } from '@angular/common/http';
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
import { DataService } from './shareddata/data.service';
import { throwError, timer } from 'rxjs';
import { catchError, retry, retryWhen, delayWhen, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private CurrentUser:UserView = null;
  private api_url = environment.api_url;
  authenticationState = new BehaviorSubject(false);
  showSplashLoader:boolean;

  constructor(private dataService: DataService,private next: HttpHandler,private platform: Platform, private appVersion:AppVersion, private userAgent: UserAgent, private device:Device, private toastController: ToastController, private http:HttpClient, private storage: Storage, private plt:Platform, private route:Router, private authService:AuthenticationService) { 
      this.storage.get('currentUser').then( res=>{
        if(res)
        {
          this.checkToken(null);
        }else{
          this.dataService.showsplashLoader.next(false);
        }
      });
      this.dataService.showsplashLoader.subscribe(d =>{
        this.showSplashLoader = d;
      })
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
        this.CurrentUser = user;
        this.storage.set('currentUser',JSON.stringify(user));
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
      remToken = user.remToken;
      this.updateUserTrackLogOut(userId, remToken).subscribe((res:any)=>{
        if(res.status == 'D'){
          this.storage.remove('currentUser').then(()=>{
          this.dataService.showsplashLoader.next(false);
          this.authenticationState.next(false);
          });
        }
      });
    });
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(req){
    this.storage.get('currentUser').then(res=>{
      let user:any = JSON.parse(res);
      if(user && user.token && user.remToken){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        var username:String = user.username;
        var remToken:String = user.remToken;
       return this.http.post<any>(this.api_url+'/Users/AuthRem',{username,remToken},httpOptions).subscribe(userdata=>{
          this.CurrentUser = userdata;
          this.storage.set('currentUser',JSON.stringify(userdata));
          this.authenticationState.next(true);
          this.ProcUserTrack(userdata);
          return userdata;
        },error=>{
          this.dataService.showsplashLoader.next(false);
          this.presentToast(error.error.message);
          return null;
        })
      }else{
        this.dataService.showsplashLoader.next(false);
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
     
      this.trackUser(objTrack).pipe().subscribe(trackData=>{
        var objtrackdtls = new UserTrackDtls();
        objtrackdtls.TrackingId = trackData['trackingId'];
        objtrackdtls.Userid = objTrack.Userid;
          objtrackdtls.UserAgent = null;
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
        this.trackUserDetails(objtrackdtls).pipe().subscribe(data=>{
        },error=>{

        });
      },error=>{

      });
    
    }catch(e){

    }
  }

  updateUserTrackLogOut(userid,remToken):Observable<Object>{
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

    return this.http.post(this.api_url + `/users/UpdateUsertrack`, obj, httpOptions).pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  async presentToast(val) {
    const toast = await this.toastController.create({
      message: val,
      duration: 5000
    });
    toast.present();
  } 
}