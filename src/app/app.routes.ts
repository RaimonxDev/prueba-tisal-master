import { Routes } from '@angular/router';
import Home from './components/home/home';
import Prueba2 from './components/prueba-3/prueba-3';
import PruebaObs2 from './components/prueba-3-obs/prueba-3-obs';
import Prueba1 from './components/prueba-2/prueba-2';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'prueba2', component: Prueba1 },
  { path: 'prueba3', component: Prueba2 },
  { path: 'prueba3-obs', component: PruebaObs2 },
  { path: '**', redirectTo: 'home' }
];
