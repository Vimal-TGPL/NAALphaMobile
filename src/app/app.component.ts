import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

declare var navigator: any;
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
      this.statusBar.backgroundColorByHexString("#2b468f");
      
      var netcon = this.network.onConnect().subscribe(async ()=>{
        document.getElementById('NetError').style.visibility = 'hidden';
     });
  
     var netdis = this.network.onDisconnect().subscribe(async ()=>{
      document.getElementById('NetError').style.visibility = 'visible';
     });

      if(this.platform.is('cordova')){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        // console.log('device');
        if(this.network.type != 'none' ){
          this.authService.authenticationState.subscribe(state =>{
            // console.log("Auth State : "+state);
            if(state){
              if(this.platform.is('ipad') || this.platform.is('tablet'))
              {
                this.navController.navigateRoot(['tabs/home']);
                this.splashScreen.hide();
              }else{
                  this.navController.navigateRoot(['menu/menu/home']);
                  // this.router.navigateByUrl('/menu/menu/home');       
                  this.splashScreen.hide();
                }
            }else{
              this.splashScreen.hide();
              this.navController.navigateRoot(['landing']);
              // this.router.navigateByUrl('/landing');
              
            }
          });
        }else{
          this.splashScreen.hide();
          document.getElementById('NetError').style.visibility = 'visible';
        }
      }else{
        // console.log('browser');
        if(navigator.onLine){
          this.authService.authenticationState.subscribe(state =>{
            // console.log("Auth State : "+state);
            if(state){
              if(this.platform.is('ipad') || this.platform.is('tablet')){
                // console.log('ipad/tablet');
                this.navController.navigateRoot(['tabs/home']);
                this.splashScreen.hide();
              }else{
                this.navController.navigateRoot(['menu/menu/home']);
                
                this.splashScreen.hide(); 
              }
              
            }else{
              this.splashScreen.hide();
              this.navController.navigateRoot(['landing']);              
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
