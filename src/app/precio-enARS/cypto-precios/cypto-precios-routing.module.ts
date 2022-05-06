import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyptoPreciosPage } from './cypto-precios.page';

const routes: Routes = [
  {
    path: '',
    component: CyptoPreciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyptoPreciosPageRoutingModule {}
