import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { IPadHomeToolComponent } from '../Components/i-pad-home-tool/i-pad-home-tool.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    // IonicSelectableModule
  ],
  declarations: [HomePage,IPadHomeToolComponent]
})
export class HomePageModule {}
