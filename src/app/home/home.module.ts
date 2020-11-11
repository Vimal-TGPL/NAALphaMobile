import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router  } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
}
