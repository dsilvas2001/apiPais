import { Injectable, OnInit } from '@angular/core';
import { CountryI } from '../interfaces/countries.interface';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesFavoritesService implements OnInit {
  countries: CountryI[] | null = null;
  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this._countriesService.getCountriesFavorites();
  }

  deleteFavorite(country: CountryI) {
    this._countriesService.deleteFavorite(country);
    this.countries = this._countriesService.getCountriesFavorites();
  }
}
