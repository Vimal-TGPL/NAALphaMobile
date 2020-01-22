import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotPass: FormGroup;
  

  constructor(private route:Router, private userServices:UserService, private toastController:ToastController) { }

  ngOnInit() {
    this.forgotPass = new FormGroup({
      LastName: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required,Validators.email]),
    });
  }

  OnSubmitClick(){
    let data = {
    LastName: this.forgotPass.controls['LastName'].value,
    Email: this.forgotPass.controls['Email'].value,
    }
    this.userServices.forgotPassword(data).subscribe(data=>{
      this.forgotPass.reset();
      this.route.navigate(['/thankyou'],{ queryParams: { resetPassword: 'successfullyreset' } });
      return false;
    },err=>{
      console.log(err);
      this.presentToast(err.error.message);
    })
    console.log(data);
  }

  OnLoginClick(){
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
