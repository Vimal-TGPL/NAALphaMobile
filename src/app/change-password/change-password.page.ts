import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  customErrors = {required: 'Please accept the terms'}
  changePasswordForm:FormGroup;
  flag: any;
    valueee: any;
  pwd:boolean = false;
  Cpwd:boolean = false;

  constructor(private formBuilder:FormBuilder,private userServices:UserService,private toastController:ToastController, private route:Router) { }
  hasError = (controlName: string, errorName: string) => {
    console.log(this.changePasswordForm.controls[controlName].hasError(errorName));
    return this.changePasswordForm.controls[controlName].hasError(errorName);
}
  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      Password: ['', [
          Validators.required,
          Validators.minLength(8)
      ]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, { validator: passwordMatchValidator });
  }
  

  onSubmitClick(){
    console.log("clciked")
     if(this.changePasswordForm.valid)
     {
       let Password = this.changePasswordForm.controls["Password"].value;
      this.userServices.UpdatePass(Password)
      .subscribe(data=>{
        console.log(data);
        this.presentToast("New Password changed successfully");
        this.changePasswordForm.reset();
        setTimeout(()=>{
          this.route.navigateByUrl('/menu/menu/home');
        })
      })
     }
   }

   onReturnClick(){
    this.route.navigateByUrl('/menu/menu');
   }

   async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  onPwdTextInput(){
    this.pwd = true;
  }

  onCPwdTextInput(){
    this.Cpwd = true;
    if(this.changePasswordForm.controls["Password"].value === this.changePasswordForm.controls["confirmPassword"].value){
      this.flag = false;
    }else if(this.changePasswordForm.controls["confirmPassword"].value.length < 1){
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