import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  url = 'https://www.newagealpha.com/';
  constructor(private iab:InAppBrowser, private route:Router) { }

  ngOnInit() {
  }

  onSkipClick(){
    this.iab.create(this.url,'_self','location=no,toolbar=no,zoom=no');
  }

  onLoginClick(){
    this.route.navigateByUrl('/auth');
  }

  onSignupClick(){
    this.route.navigateByUrl('/signup');
  }

}
