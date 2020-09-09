import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router  } from '@angular/router';

import { HomePage } from './home.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { IPadHomeToolComponent } from '../Components/i-pad-home-tool/i-pad-home-tool.component'

// const tabroutes : Routes =[{
//   path : 'tabs',
//   component : HomePage,
//   children : [{
//     path : 'tab1',
//     component:IPadHomeToolComponent
//   }]
// },{
//   path : '',
//   redirectTo : '/home/tabs/tab1',
//   pathMatch : 'full'
// }];

// const mobileroutes : Routes =[{
//   path: '',
//   component: HomePage,
//   children : [{
//     path : 'menu/menu/home',
//     loadChildren : () => import('../home/home.page').then(m=> m.HomePage),
//   }]
// }];


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
    // RouterModule.forChild(mobileroutes),
    // IonicSelectableModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  // constructor(private platform: Platform, private router: Router){
  //   if(this.platform.is('ipad') || this.platform.is("tablet")){
  //     router.resetConfig(tabroutes);
  //     // routes = tabroutes;
  //   }else{
  //    router.resetConfig(mobileroutes);
  //   }
  // }
}
