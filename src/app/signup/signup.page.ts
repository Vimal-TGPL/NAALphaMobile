import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
//import { HTTP } from '@ionic-native/http/ngx';
declare var hbspt: any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    hbspt.forms.create({
      portalId: "6010193",
      formId: "8a5c3b99-5ca9-4f28-8d99-616c8528d53e",
      target: "#dvSignUp",
      onFormSubmit: function ($form) { 
      }
    });
  }

  // signupForm: FormGroup;

  constructor(private route: Router, public toastController: ToastController, private http: HttpClient, private alertctrl: AlertController, private userServices:UserService) { }

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   FirstName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern('^[a-zA-Z]+')]),
    //   LastName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+')]),
    //   Email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
    //   Password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]),
    //   SelectIAMA: new FormControl('', [Validators.required]),
    //   CompanyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   IAgree: new FormControl(false, [Validators.requiredTrue]),
    // });
    
  }

  // OnsignupClick() {
  //   let data = {
  //     FirstName: this.signupForm.controls["FirstName"].value,
  //     LastName: this.signupForm.controls["LastName"].value,
  //     Username: this.signupForm.controls["Email"].value,
  //     Company: this.signupForm.controls["CompanyName"].value,
  //     Password: this.signupForm.controls["Password"].value,
  //     InvestorType: this.signupForm.controls["SelectIAMA"].value,
  //     Email: this.signupForm.controls["Email"].value,
  //     IsPolicyAccepted: this.signupForm.controls["IAgree"].value == true ? 'Y' : 'N',
  //     Token: ""
  //   }
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };
  //   this.userServices.register(data)
  //   .subscribe(data=>{
  //     console.log(data);
  //     this.signupForm.reset();
  //     this.route.navigateByUrl('/thankyou');
  //   },err=>{
  //     console.log(err)
  //     this.presentToast(err.error.message);
  //   })
  // }

  OnLoginClick() {
    this.route.navigateByUrl('/auth');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
