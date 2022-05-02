import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoPreciosPage } from './crypto-precios.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoPreciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoPreciosPageRoutingModule {}
