import { Component} from '@angular/core';
import { ProfiledetailsComponent } from '../profiledetails/profiledetails.component';
import { PopoverController } from '@ionic/angular';
import { DataService } from '../../services/shareddata/data.service';


@Component({
  selector: 'app-ipadhometool',
  templateUrl: './i-pad-home-tool.component.html',
  styleUrls: ['./i-pad-home-tool.component.scss'],
})

export class IPadHomeToolComponent{

  showGrid:boolean;
  _showGridSub:any;
  showGICS:boolean;
  _showGICSSub:any;

  constructor(private popoverController: PopoverController, private dataService: DataService){
    this._showGridSub = this.dataService.showGrid.subscribe(d => {
      this.showGrid = d;
    })
    this._showGICSSub = this.dataService.showGICS.subscribe(d => {
      this.showGICS = d;
    })
  }

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