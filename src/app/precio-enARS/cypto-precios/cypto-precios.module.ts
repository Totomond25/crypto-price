import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyptoPreciosPageRoutingModule } from './cypto-precios-routing.module';

import { CyptoPreciosPage } from './cypto-precios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyptoPreciosPageRoutingModule
  ],
  declarations: [CyptoPreciosPage]
})
export class CyptoPreciosPageModule {}
