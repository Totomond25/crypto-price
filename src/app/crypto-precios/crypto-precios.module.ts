import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoPreciosPageRoutingModule } from './crypto-precios-routing.module';

import { CryptoPreciosPage } from './crypto-precios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoPreciosPageRoutingModule
  ],
  declarations: [CryptoPreciosPage]
})
export class CryptoPreciosPageModule {}
