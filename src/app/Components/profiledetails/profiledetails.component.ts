import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.scss'],
})
export class ProfiledetailsComponent implements OnInit {

  url = 'https://www.newagealpha.com/';
  user:any;
  firstname:string;
  lastname:string;
  username:string;

  constructor( private route:Router, private authService: AuthenticationService, private popoverController: PopoverController,private storage:Storage) { }

  ngOnInit() {
    this.storage.get('currentUser').then(res=>{
      this.user = JSON.parse(res);
      console.log(this.user); 
      this.firstname = this.user.firstName;
      this.lastname = this.user.lastName;
      this.username = this.user.username;
    })
  }

  eventFromPopover() {
    // this.events.publish('fromPopoverEvent');
    this.popoverController.dismiss();
  }

  onLogoutClick(){
    this.DismissClick();
    this.authService.logout();
  }
  async DismissClick() {
    await this.popoverController.dismiss();
  }

  onChangePasswordClick(){
    this.DismissClick()
    this.route.navigateByUrl('/menu/menu/change-password')
  }
}
