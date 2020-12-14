import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  showLoad:boolean = false;
  mobile : boolean;
  customErrors = {required: 'Please accept the terms'}
  changePasswordForm:FormGroup;
  flag: any;
    valueee: any;
  pwd:boolean = false;
  Cpwd:boolean = false;

  constructor(private platform:Platform, private menuController:MenuController ,private formBuilder:FormBuilder,private userServices:UserService,private toastController:ToastController, private route:Router) { }
  
  hasError = (controlName: string, errorName: string) => {
    return this.changePasswordForm.controls[controlName].hasError(errorName);
}

ionViewDidLeave(){
  this.menuController.enable(true);
}

  ngOnInit() {
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
    this.changePasswordForm = this.formBuilder.group({
      Password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
      ]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, { validator: passwordMatchValidator });

  this.menuController.enable(false);
  }
  

  onSubmitClick(){
    this.showLoad = true;
     if(this.changePasswordForm.valid)
     {
       let Password = this.changePasswordForm.controls["Password"].value;
      this.userServices.UpdatePass(Password)
      .subscribe(data=>{
        this.showLoad = false;
        this.presentToast("New Password changed successfully");
        this.changePasswordForm.reset();
        setTimeout(()=>{
          this.route.navigateByUrl('/menu/menu/home');
        })
      })
     }
   }

   onReturnClick(){
    this.route.navigateByUrl('/menu/menu/home');
   }

   async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass: 'center'
    });
    toast.present();
  }

  onPwdTextInput(){
    this.pwd = true;
  }

  onCPwdTextInput(){
    this.Cpwd = true;    
    if(this.changePasswordForm.controls["Password"].value.toString() === this.changePasswordForm.controls["confirmPassword"].value.toString()){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('Password').value === formGroup.get('confirmPassword').value)
      return null;
  else
      return { passwordMismatch: true };
};