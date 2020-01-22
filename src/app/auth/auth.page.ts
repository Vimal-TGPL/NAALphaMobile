import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  loginForm: FormGroup;
  stayStignedIn : boolean;
 

  constructor(private route:Router, private http: HttpClient, private toastController:ToastController, private authenticationService: AuthenticationService, private storage:Storage) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      
    });
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
    this.route.navigateByUrl('/signup');
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