import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'airports',
    loadComponent: () => import('./pages/airports/airports.page').then( m => m.AirportsPage)
  },
  {
    path: 'airport-details/:id',
    loadComponent: () => import('./pages/airport-detail/airport-detail.page').then(m => m.AirportDetailPage)
  },
  {
    path: 'add-flight',
    loadComponent: () => import('./pages/add-flight/add-flight.page').then( m => m.AddFlightPage)
  },
];
