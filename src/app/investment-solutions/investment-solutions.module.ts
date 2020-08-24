import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentSolutionsPageRoutingModule } from './investment-solutions-routing.module';

import { InvestmentSolutionsPage } from './investment-solutions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentSolutionsPageRoutingModule
  ],
  declarations: [InvestmentSolutionsPage]
})
export class InvestmentSolutionsPageModule {}
