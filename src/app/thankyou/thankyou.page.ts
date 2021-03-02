import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  showMessage:string = "";

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Identifying which Thankyou message should be shown
    if(this.route.snapshot.queryParams['resetPassword'] == "successfullyreset")
    {
      this.showMessage = "successfullyreset";
    }else if(this.route.snapshot.queryParams['resetPasswordChange'] == "successfullychanged"){
      this.showMessage = "successfullychanged";
    }else {
      this.showMessage = "";
  }
  }

  onLoginClick(){
    this.router.navigateByUrl('/auth');
  }
}
