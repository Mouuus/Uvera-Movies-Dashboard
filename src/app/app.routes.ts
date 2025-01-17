import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'browse',
    pathMatch:'full'
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./pages/browse/browse.component').then((a) => a.BrowseComponent),
  },
];
