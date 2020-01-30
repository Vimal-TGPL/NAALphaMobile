import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
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

  selectedPath = '';

  constructor(private iab:InAppBrowser,private route:Router, private authService:AuthenticationService, private storage:Storage) {
    this.route.events.subscribe((event:RouterEvent)=>{
      this.selectedPath = event.url;
    });
    this.storage.get('currentUser').then(res=>{
      this.user = JSON.parse(res);
      console.log(this.user); 
      this.firstname = this.user.firstName;
      this.lastname = this.user.lastName;
      this.username = this.user.username;
    })
   }

  ngOnInit() {
    
  }

  onLogoutClick(){
    this.authService.logout();
  }

  onChangePasswordClick(){
    this.route.navigateByUrl('/menu/menu/change-password')
  }

  openBrowserClick(){
    this.iab.create(this.url,'_self','location=no,toolbar=no,zoom=no');
  }
}
