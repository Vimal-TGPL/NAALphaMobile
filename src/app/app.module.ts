import { Injector, NgModule } from '@angular/core';
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
import { ErrorInterceptor } from './_helper/error.interceptor';
import { MatTabsModule} from '@angular/material/tabs'
import { Network } from '@ionic-native/network/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatePipe } from '@angular/common/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Device } from '@ionic-native/device/ngx';
import { UserAgent } from '@ionic-native/user-agent/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileSearchComponent } from './Components/mobile-search/mobile-search.component';
import { SectorPopoverComponent } from './Components/sector-popover/sector-popover.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { enterAnimation } from './_animations/nav-animation';

library.add(faAngleDoubleLeft);
@NgModule({
  declarations: [AppComponent,ProfiledetailsComponent,MobileSearchComponent,SectorPopoverComponent,LineChartComponent],
  entryComponents: [ProfiledetailsComponent,MobileSearchComponent,SectorPopoverComponent,LineChartComponent],
  imports: [BrowserModule,BrowserAnimationsModule, MatTabsModule, IonicModule.forRoot({navAnimation:enterAnimation}), HttpClientModule, ReactiveFormsModule, AppRoutingModule, IonicStorageModule.forRoot(),FontAwesomeModule],
  providers: [
    InAppBrowser,
    StatusBar,DatePipe,
    BrowserModule,
    Network,
    HTTP, 
    SplashScreen,
    ScreenOrientation,
    Toast,
    PhotoViewer,
    File,
    Device,
    UserAgent,
    AppVersion,
    FaConfig,
    FaIconLibrary,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
