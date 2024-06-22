import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'Auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Country',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'Auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
