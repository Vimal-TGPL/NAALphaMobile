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
  }

  constructor(private route: Router, public toastController: ToastController, private http: HttpClient, private alertctrl: AlertController, private userServices:UserService) { }

  ngOnInit() {
    
  }

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
