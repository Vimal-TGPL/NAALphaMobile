import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, IonInput, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform} from '@ionic/angular';
import { UserTrack, UserTrackDtls } from '../_models/user'
import { Device } from '@ionic-native/device/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx'
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DataService } from '../services/shareddata/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit,AfterViewInit {
  mobile : boolean;
  showLoad:boolean = false;
  loginForm: FormGroup;
  stayStignedIn : boolean;
  signupUrl = 'https://blog.newagealpha.com/h-factor';
  pwd:boolean = false;
  email:boolean = false;
  showSplashLoader:boolean = true;

  constructor(private navCtrl: NavController,private dataService: DataService,private appVersion:AppVersion, private userAgent: UserAgent, private device:Device, private platform:Platform, private route:Router, private iab:InAppBrowser, private http: HttpClient, private toastController:ToastController, private authenticationService: AuthenticationService, private storage:Storage) { }
  ngAfterViewInit(){
    document.getElementById('authLoader').style.display= 'none';
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
}
  ngOnInit() {
    this.dataService.showsplashLoader.subscribe(d =>{
      this.showSplashLoader = d;
    })
    //Detecting Device Form Factor
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }

    //Login Form Group Definition 
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  onemialTextInput(){
    this.email = true;
  }

  onPwdTextInput(){
    this.pwd = true;
  }

  onLoginClick(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if(this.loginForm.valid)
    {
      this.showLoad = true;
       let username = this.loginForm.controls['Email'].value;
       let password = this.loginForm.controls['Password'].value;
       let isRemember ='Y';
     
      this.authenticationService.login(username,password,isRemember)
      .subscribe(data=>{
        this.showLoad = false;
        if(data.isEmailVerified !== "" && data.isEmailVerified == "Y"){
              this.loginForm.reset();
            }else {
              this.presentToast("Please verify your email address sent to your inbox");
          }
      }
      ,err=>{
        this.showLoad = false;
        })
    } 
  }

  onRegisterClick(){
    document.getElementById('authLoader').style.display ="flex";
     var browser = this.iab.create(this.signupUrl,'_blank',"location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
     
      browser.hide();
     browser.on('loadstop').subscribe(() => {
      document.getElementById('authLoader').style.display ="none";
       browser.show();
      browser.insertCSS({code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"});
   });
      browser.on('exit').subscribe(()=>{
        browser.close();
      })
  }

  onForgotPassClick(){
    this.navCtrl.navigateForward(['/forgot-password']);
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