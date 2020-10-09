import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
// santhosh
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  mobile : boolean;
  showNetError:boolean; 
  authState:boolean;
  signupUrl = 'https://blog.newagealpha.com/h-factor';
  url = 'https://www.newagealpha.com/';
  constructor(private authService : AuthenticationService ,private alertCtrl : AlertController,private network: Network,private platform:Platform, private iab:InAppBrowser, private route:Router) { 
  //  var netcon = this.network.onConnect().subscribe(async ()=>{
  //     document.getElementById('NetError').style.visibility = 'hidden';
  //  })

  //  var netdis = this.network.onDisconnect().subscribe(async ()=>{
  //   document.getElementById('NetError').style.visibility = 'visible';
  //  })
  }

  ngOnInit() {
   this.authService.authenticationState.subscribe(state =>{
    this.authState = state;
    // console.log('authstate from landing page'+state)
    })
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
     var browser = this.iab.create(this.signupUrl,'_blank','location=no,toolbar=yes,zoom=no');

     browser.on('loadstop').subscribe(event => {
      browser.insertCSS({code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"});
   });
     
  }

}
