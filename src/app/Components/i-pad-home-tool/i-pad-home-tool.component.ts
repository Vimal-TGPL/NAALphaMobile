import { Component} from '@angular/core';
import { ProfiledetailsComponent } from '../profiledetails/profiledetails.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ipadhometool',
  templateUrl: './i-pad-home-tool.component.html',
  styleUrls: ['./i-pad-home-tool.component.scss'],
})

export class IPadHomeToolComponent{

  constructor(private popoverController: PopoverController){}

  async profilePopover(e: any) {
    const popover = await this.popoverController.create({
      component: ProfiledetailsComponent,
      event: e,
      translucent: true,
      cssClass: 'Custom_profile'
    });

    return await popover.present();
  }
}