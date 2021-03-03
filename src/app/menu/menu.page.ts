import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform, IonSlides, IonContent, MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  mobile:boolean;
  url = 'https://www.newagealpha.com/';
  user:any;
  firstname:string;
  lastname:string;
  username:string;
  page = [
    {
      title: 'Home',
      url:'/menu/home'
    }
  ];

  investmentsolution:boolean;

  selectedPath = '';

  constructor(private navCtrl: NavController,private menuCrtl: MenuController, private platform:Platform, private iab:InAppBrowser,private route:Router, private authService:AuthenticationService, private storage:Storage) {
    this.route.events.subscribe((event:RouterEvent)=>{
      this.selectedPath = event.url;
    });

    // Geting User Details From Storage
    this.storage.get('currentUser').then(res=>{
      this.user = JSON.parse(res);
      this.firstname = this.user.firstName;
      this.lastname = this.user.lastName;
      this.username = this.user.username;
    })
   }

  ngOnInit() {
    this.investmentsolution = false;

    // Detecting Device Form Factor
    if(this.platform.is('ipad') || this.platform.is('tablet')){
      this.mobile = false;
    }else{
      this.mobile = true;
    }
  }

  onLogoutClick(){
    this.authService.logout();
  }

  onChangePasswordClick(){
    this.navCtrl.navigateForward(['/menu/menu/change-password']);
  }
}