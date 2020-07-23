import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx'
import { IonicStorageModule } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ProfiledetailsComponent } from './Components/profiledetails/profiledetails.component'
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MatTabsModule} from '@angular/material/tabs'
import { Network } from '@ionic-native/network/ngx';
import { Toast } from '@ionic-native/toast/ngx';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Device } from '@ionic-native/device/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@NgModule({
  declarations: [AppComponent,ProfiledetailsComponent],
  entryComponents: [ProfiledetailsComponent],
  imports: [BrowserModule,BrowserAnimationsModule, MatTabsModule, IonicModule.forRoot(), HttpClientModule, ReactiveFormsModule, AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    InAppBrowser,
    StatusBar,
    BrowserModule,
    Network,
    HTTP, 
    SplashScreen,
    ScreenOrientation,
    IonicSelectableComponent,
    Toast,
    PhotoViewer,
    File,
    Device,
    UserAgent,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
