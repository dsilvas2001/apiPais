import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCountriesComponent } from './pages/search-countries/search-countries.component';
import { CountriesFavoritesComponent } from './pages/countries-favorites/countries-favorites.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search-countries',
        component: SearchCountriesComponent,
      },
      {
        path: 'countries-favorites',
        component: CountriesFavoritesComponent,
      },
      { path: '**', redirectTo: 'search-countries' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
