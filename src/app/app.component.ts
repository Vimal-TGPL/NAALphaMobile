
/* App Component will be executed first when app launches */

/* While App Launches, App component will check for the Network Status and exisitng User Login Sessions */

/* And also lock the screen orientation to Portait Orientation */

import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

declare var navigator: any;     //DOM Navigator Object Definition
declare var Connection: any;    

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showLoad:boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private network: Network,
    private toastController: ToastController,
    private navController : NavController,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#2b468f");     //Status Bar BackGround Color
      
      var netcon = this.network.onConnect().subscribe(async ()=>{
        document.getElementById('NetError').style.visibility = 'hidden';
     });
  
     var netdis = this.network.onDisconnect().subscribe(async ()=>{
      document.getElementById('NetError').style.visibility = 'visible';
     });

      if(this.platform.is('cordova')){
      //If Part will be executed only in mobile or tablet with Cordova

        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);    //Screen Orientation Lock
        if(this.network.type != 'none' ){
          this.authService.authenticationState.subscribe(state =>{
            if(state){
              if(this.platform.is('ipad') || this.platform.is('tablet'))
              {
                this.navController.navigateRoot(['tabs/home']);
                this.splashScreen.hide();
              }else{
                  this.navController.navigateRoot(['menu/menu/home']);       
                  this.splashScreen.hide();
                }
            }else{
              this.splashScreen.hide();
              this.navController.navigateRoot(['auth']);
            }
          });
        }else{
          this.splashScreen.hide();
          document.getElementById('NetError').style.visibility = 'visible';
        }
      }else{
        // Else part will be executed in browser while under development

        if(navigator.onLine){
          this.authService.authenticationState.subscribe(state =>{
            if(state){
              if(this.platform.is('ipad') || this.platform.is('tablet')){
                this.navController.navigateRoot(['tabs/home']);
                this.splashScreen.hide();
              }else{
                this.navController.navigateRoot(['menu/menu/home']);
                
                this.splashScreen.hide(); 
              }
              
            }else{
              this.splashScreen.hide();
              this.navController.navigateRoot(['auth']);              
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

  onTryAgainClick(){
    this.showLoad = true;
 var networkState = navigator.connection.type;

    if(networkState !== Connection.NONE){
      document.getElementById('NetError').style.visibility = 'hidden';
      this.showLoad = false;
    }else{
      document.getElementById('NetError').style.visibility = 'visible';
      this.showLoad = false;
    }
  }
}
