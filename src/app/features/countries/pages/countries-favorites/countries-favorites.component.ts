import { Component, OnInit } from '@angular/core';
import { CountryI } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-countries-favorites',
  templateUrl: './countries-favorites.component.html',
  styleUrl: './countries-favorites.component.css',
})
export class CountriesFavoritesComponent implements OnInit {
  countries: CountryI[] | null = null;
  constructor(
    private _countriesService: CountriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.countries = this._countriesService.getCountriesFavorites();
  }

  deleteFavorite(country: CountryI) {
    this._countriesService.deleteFavorite(country);
    this.countries = this._countriesService.getCountriesFavorites();
  }
  signOut() {
    this.authService.signOut();
  }
}
