import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crypto-precios',
    loadChildren: () => import('./crypto-precios/crypto-precios.module').then( m => m.CryptoPreciosPageModule)
  },
  {
    path: 'cypto-precios/ARS',
    loadChildren: () => import('./precio-enARS/cypto-precios/cypto-precios.module').then( m => m.CyptoPreciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
