import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentSolutionsPage } from './investment-solutions.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentSolutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentSolutionsPageRoutingModule {}
