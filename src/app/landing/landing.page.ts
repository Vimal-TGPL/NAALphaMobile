import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/shareddata/data.service';
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
  // loader:boolean;
  signupUrl = 'https://blog.newagealpha.com/h-factor';
  url = 'https://www.newagealpha.com/';
  showSplashLoader:boolean = true;
  constructor(private dataService: DataService ,private authService : AuthenticationService ,private alertCtrl : AlertController,private network: Network,private platform:Platform, private iab:InAppBrowser, private route:Router) { 
  //  var netcon = this.network.onConnect().subscribe(async ()=>{
  //     document.getElementById('NetError').style.visibility = 'hidden';
  //  })

  //  var netdis = this.network.onDisconnect().subscribe(async ()=>{
  //   document.getElementById('NetError').style.visibility = 'visible';
  //  })
  }

  ngOnInit() {
    // this.loader = false;
  document.getElementById('Loader').style.display= 'none';
  this.dataService.showsplashLoader.subscribe(d =>{
    this.showSplashLoader = d;
  })
   this.authService.authenticationState.subscribe(state =>{
    this.authState = state;
      // if(this.authState == false){
      //   this.dataService.showsplashLoader.next(false);
      // }else{
      //   this.dataService.showsplashLoader.next(true);
      // }
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
    // var that = this;
    //this.route.navigateByUrl('/signup');

    document.getElementById('Loader').style.display ="flex";
     var browser = this.iab.create(this.signupUrl,'_blank',"location=no,toolbar=yes,zoom=no,toolbarcolor=#2b468f");
     
      browser.hide();
      // that.loader = true;
     browser.on('loadstop').subscribe(() => {
      document.getElementById('Loader').style.display ="none";
       browser.show();
      browser.insertCSS({code: "#hs_cos_wrapper_module_156318587919491_{display: none !important;"});
   });



      browser.on('exit').subscribe(()=>{
        browser.close();
      })
     
  }

  // loaderdeactivate(){
  //   // this.loader = false;
  //   // console.log(this.loader);
  // }



}
