import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
// import { NetworkService } from './services/networks/network.service';
// import { debounceTime } from 'rxjs/operators';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private network: Network,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#2b468f");
      if(this.platform.is('cordova')){
        console.log('device');
        if(this.network.type != 'none' ){
          this.authService.authenticationState.subscribe(state =>{
            console.log("Auth State : "+state);
            if(state){
              
              this.splashScreen.hide(); 
                  this.router.navigateByUrl('/menu');       
            }else{
              this.splashScreen.hide();
              this.router.navigateByUrl('/landing');
            }
          });
        }else{
          this.splashScreen.hide();
          this.presentToast();
        }
      }else{
        console.log('browser');
        if(navigator.onLine){
          this.authService.authenticationState.subscribe(state =>{
            console.log("Auth State : "+state);
            if(state){
              this.splashScreen.hide(); 
                  this.router.navigateByUrl('/menu');       
            }else{
              this.splashScreen.hide();
              this.router.navigateByUrl('/landing');
            }
          });
        }else{
          this.splashScreen.hide();
          this.presentToast();
        }
      }
       
      
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Network Error, Please check the Connection',
      duration: 3000
    });
    toast.present();
  }
}
