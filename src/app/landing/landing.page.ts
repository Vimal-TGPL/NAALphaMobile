import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  mobile : boolean;
  signupUrl = 'https://blog.newagealpha.com/h-factor';
  url = 'https://www.newagealpha.com/';
  constructor(private network: Network,private platform:Platform, private iab:InAppBrowser, private route:Router) { 
   
  }

  ngOnInit() {
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
  }

  

  onSkipClick(){
    this.iab.create(this.url,'_blank','location=no,toolbar=yes,zoom=no');
  }

  onLoginClick(){
    this.route.navigateByUrl('/auth');
  }

  onForgotPwdClick(){
    this.route.navigateByUrl('/forgot-password');
  }

  onSignupClick(){
    //this.route.navigateByUrl('/signup');
    this.iab.create(this.signupUrl,'_blank','location=no,toolbar=yes,zoom=no');
  }

}
