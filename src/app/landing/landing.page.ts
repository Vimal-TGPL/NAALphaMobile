import { Component, OnDestroy, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController} from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/shareddata/data.service';
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
  _backSub:any;
  showSplashLoader:boolean = true;
  constructor(private toastCtrl: ToastController ,private dataService: DataService ,private authService : AuthenticationService ,private alertCtrl : AlertController,private network: Network,private platform:Platform, private iab:InAppBrowser, private route:Router) {}

  ionViewDidEnter(){
    var backpressOncetoExit:boolean = false;
    this._backSub = this.platform.backButton.subscribeWithPriority(0, async()=>{
      if(backpressOncetoExit){
        navigator['app'].exitApp();
      }else{
        backpressOncetoExit = true;
        setTimeout(() => {
          backpressOncetoExit = false;
        }, 5000);
        var toast = await this.toastCtrl.create({
          message:'Press back again to exit NewAgeAlpha App',
          duration:1000,
          cssClass:'center'
        });

        toast.present();
      }
    })
  }

  ionViewWillLeave() {
    this._backSub.unsubscribe();
  }

  ngOnInit() {
  document.getElementById('Loader').style.display= 'none';
  this.dataService.showsplashLoader.subscribe(d =>{
    this.showSplashLoader = d;
  })
   this.authService.authenticationState.subscribe(state =>{
    this.authState = state;
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

  // onLoginClick(){
  //   //this.route.navigateByUrl('/auth');
  // }

  // onForgotPwdClick(){
  //   this.route.navigateByUrl('/forgot-password');
  // }

  onSignupClick(){
    document.getElementById('Loader').style.display ="flex";
     var browser = this.iab.create(this.signupUrl,'_blank',"location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
      browser.hide();
     browser.on('loadstop').subscribe(() => {
      document.getElementById('Loader').style.display ="none";
       browser.show();
      browser.insertCSS({code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"});
   });
      browser.on('exit').subscribe(()=>{
        browser.close();
      })
  }
}