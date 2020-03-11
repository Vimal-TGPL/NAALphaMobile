import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  loginForm: FormGroup;
  stayStignedIn : boolean;
  signupUrl = 'https://app.newagealpha.com/signUp';
  pwd:boolean = false;
  email:boolean = false;

  constructor(private route:Router, private iab:InAppBrowser, private http: HttpClient, private toastController:ToastController, private authenticationService: AuthenticationService, private storage:Storage) { }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
}
  ngOnInit() {
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
       let username = this.loginForm.controls['Email'].value;
       let password = this.loginForm.controls['Password'].value;
       let isRemember ='N';
     
      this.authenticationService.login(username,password,isRemember)
      .subscribe(data=>{
        if(data.isEmailVerified !== "" && data.isEmailVerified == "Y"){
              this.loginForm.reset();
            }else {
              this.presentToast("Please verify your email address sent to your inbox");
          }
      },err=>{
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