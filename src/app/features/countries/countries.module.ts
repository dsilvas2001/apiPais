import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { SearchCountriesComponent } from './pages/search-countries/search-countries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesFavoritesComponent } from './pages/countries-favorites/countries-favorites.component';

@NgModule({
  declarations: [SearchCountriesComponent, CountriesFavoritesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CountriesModule {}
