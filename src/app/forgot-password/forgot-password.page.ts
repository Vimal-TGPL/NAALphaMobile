import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { Platform} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotPass: FormGroup;
  mobile : boolean;
  showLoad:boolean=false;

  constructor(private platform:Platform, private route:Router, private userServices:UserService, private toastController:ToastController) { }

  ngOnInit() {
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
    this.forgotPass = new FormGroup({
      Email: new FormControl('',[Validators.required,Validators.email]),
    });
  }

  OnSubmitClick(){
    this.showLoad = true;
    let data = {
    LastName: '',
    Email: this.forgotPass.controls['Email'].value,
    }
    this.userServices.forgotPassword(data).subscribe(data=>{
      this.forgotPass.reset();
      this.showLoad = false;
      this.route.navigate(['/thankyou'],{ queryParams: { resetPassword: 'successfullyreset' } });
      return false;
    },err=>{
      this.showLoad = false;
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
