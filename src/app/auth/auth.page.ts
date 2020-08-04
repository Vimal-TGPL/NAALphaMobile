import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, IonInput } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform} from '@ionic/angular';
import { UserTrack, UserTrackDtls } from '../_models/user'
import { Device } from '@ionic-native/device/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx'
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  mobile : boolean;
  showLoad:boolean = false;
  loginForm: FormGroup;
  stayStignedIn : boolean;
  signupUrl = 'https://blog.newagealpha.com/h-factor';
  pwd:boolean = false;
  email:boolean = false;

  // @ViewChild('EmailInput',{static: false}) EmailInt;

  constructor(private appVersion:AppVersion, private userAgent: UserAgent, private device:Device, private platform:Platform, private route:Router, private iab:InAppBrowser, private http: HttpClient, private toastController:ToastController, private authenticationService: AuthenticationService, private storage:Storage) { }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
}
  ngOnInit() {
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  // ionViewDidEnter() {
  //   setTimeout(()=>{
  //     // document.getElementById('EmailInput').focus();
  //     this.EmailInt.setFocus();
  //   },2000);
  // }

  onemialTextInput(){
    this.email = true;
  }

  onPwdTextInput(){
    this.pwd = true;
  }
  onLoginClick(){
    console.log('Login Clicked');
    this.showLoad = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if(this.loginForm.valid)
    {
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
      },err=>{
        this.showLoad = false;
          this.presentToast(err.error.message);
          console.log(err);
        })
    } 
  }

  onSignupClick(){
    //this.route.navigateByUrl('/signup');
    this.iab.create(this.signupUrl,'_blank','location=no,toolbar=yes,zoom=no');
  }

  onForgotPassClick(){
    this.route.navigateByUrl('/forgot-password');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}